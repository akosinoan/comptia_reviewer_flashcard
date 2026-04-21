import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, PenLine } from "lucide-react";
import { shuffle } from "@/utils/shuffle";
import PageHeader from "@/components/shared/PageHeader";
import PortMatchingGrid from "@/components/ports/PortMatchingGrid";
import PortQuizTable from "@/components/ports/PortQuizTable";
import { usePortMatching } from "@/hooks/usePortMatching";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function PortMatchingPage() {
  const {
    exam,
    loading,
    error,
    activePorts,
    shuffledPorts,
    shuffledNames,
    selectedPortId,
    matched,
    wrong,
    attempts,
    matchedCount,
    allMatched,
    accuracy,
    quizMode,
    quizAnswers,
    quizOrder,
    setShuffledPorts,
    setShuffledNames,
    setQuizAnswers,
    setQuizOrder,
    reset,
    handlePortClick,
    handleNameClick,
    toggleQuizMode,
  } = usePortMatching();

  if (loading) return <LoadingSpinner message="Loading ports…" />;
  if (error) return <LoadingSpinner message="Failed to load ports. Check your connection." />;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader
        title="Port Matching"
        subtitle={
          exam === "core2"
            ? "Security & OS administration ports — Core 2 (220-1202)"
            : exam === "netplus"
            ? "Network+ (N10-009) ports — match each port to its protocol and service"
            : "Match each port number to its protocol and service name"
        }
      />

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4 text-sm">
          <span>
            Matched:{" "}
            <span className="font-bold text-primary">{matchedCount}</span>
            {" / "}
            {activePorts.length}
          </span>
          {accuracy !== null && (
            <span className="text-muted-foreground">Accuracy: {accuracy}%</span>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={quizMode ? "default" : "outline"}
            size="sm"
            onClick={toggleQuizMode}
            className="gap-1.5"
          >
            <PenLine className="h-4 w-4" />
            {quizMode ? "Exit Quiz" : "Quiz Mode"}
          </Button>
          <Button variant="ghost" size="sm" onClick={reset} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
        </div>
      </div>

      <Progress
        value={(matchedCount / activePorts.length) * 100}
        className="h-1.5 mb-6"
      />

      {allMatched && (
        <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold">
            All matched! {matchedCount}/{attempts} attempts ({accuracy}% accuracy)
          </p>
          <Button variant="outline" size="sm" className="mt-3" onClick={reset}>
            Play Again
          </Button>
        </div>
      )}

      {!quizMode && !selectedPortId && matchedCount === 0 && (
        <p className="text-xs text-muted-foreground mb-4">
          Click a port number on the left, then click the matching service on the right.
        </p>
      )}

      {quizMode ? (
        <PortQuizTable
          activePorts={activePorts}
          quizOrder={quizOrder}
          quizAnswers={quizAnswers}
          onShuffle={setQuizOrder}
          onChange={(id, value) =>
            setQuizAnswers((prev) => ({ ...prev, [id]: value }))
          }
        />
      ) : (
        <PortMatchingGrid
          shuffledPorts={shuffledPorts}
          shuffledNames={shuffledNames}
          selected={selectedPortId}
          matched={matched}
          wrong={wrong}
          onPortClick={handlePortClick}
          onNameClick={handleNameClick}
          onSortPorts={() => setShuffledPorts([...activePorts])}
          onShufflePorts={() => setShuffledPorts(shuffle(shuffledPorts))}
          onShuffleNames={() => setShuffledNames(shuffle(shuffledNames))}
        />
      )}
    </div>
  );
}
