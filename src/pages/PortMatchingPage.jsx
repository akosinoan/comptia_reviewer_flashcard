import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, CheckCircle2, Shuffle, ArrowUpDown, PenLine } from "lucide-react";

const ALL_PORTS = [
  {
    id: 1,
    port: "20",
    protocol: "TCP",
    name: "FTP (Data)",
    fullName: "File Transfer Protocol",
  },
  {
    id: 2,
    port: "21",
    protocol: "TCP",
    name: "FTP (Control)",
    fullName: "File Transfer Protocol",
  },
  { id: 3, port: "22", protocol: "TCP", name: "SSH", fullName: "Secure Shell" },
  {
    id: 4,
    port: "23",
    protocol: "TCP",
    name: "Telnet",
    fullName: "Teletype Network",
  },
  {
    id: 5,
    port: "25",
    protocol: "TCP",
    name: "SMTP",
    fullName: "Simple Mail Transfer Protocol",
  },
  {
    id: 6,
    port: "53",
    protocol: "UDP/TCP",
    name: "DNS",
    fullName: "Domain Name System",
  },
  {
    id: 7,
    port: "67",
    protocol: "UDP",
    name: "DHCP (Server)",
    fullName: "Dynamic Host Configuration Protocol",
  },
  {
    id: 8,
    port: "68",
    protocol: "UDP",
    name: "DHCP (Client)",
    fullName: "Dynamic Host Configuration Protocol",
  },
  {
    id: 9,
    port: "80",
    protocol: "TCP",
    name: "HTTP",
    fullName: "Hypertext Transfer Protocol",
  },
  {
    id: 10,
    port: "110",
    protocol: "TCP",
    name: "POP3",
    fullName: "Post Office Protocol v3",
  },
  {
    id: 11,
    port: "143",
    protocol: "TCP",
    name: "IMAP4",
    fullName: "Internet Message Access Protocol v4",
  },
  {
    id: 12,
    port: "389",
    protocol: "TCP",
    name: "LDAP",
    fullName: "Lightweight Directory Access Protocol",
  },
  {
    id: 13,
    port: "443",
    protocol: "TCP",
    name: "HTTPS",
    fullName: "Hypertext Transfer Protocol Secure",
  },
  {
    id: 14,
    port: "445",
    protocol: "TCP",
    name: "SMB",
    fullName: "Server Message Block",
  },
  {
    id: 18,
    port: "587",
    protocol: "TCP",
    name: "SMTP (Secure)",
    fullName: "Simple Mail Transfer Protocol",
  },
  {
    id: 15,
    port: "993",
    protocol: "TCP",
    name: "IMAP4 (Secure)",
    fullName: "Internet Message Access Protocol v4",
  },
  {
    id: 16,
    port: "995",
    protocol: "TCP",
    name: "POP3 (Secure)",
    fullName: "Post Office Protocol v3",
  },
  {
    id: 17,
    port: "3389",
    protocol: "TCP",
    name: "RDP",
    fullName: "Remote Desktop Protocol",
  },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PortMatchingPage() {
  const [shuffledPorts, setShuffledPorts] = useState(() => [...ALL_PORTS]);
  const [shuffledNames, setShuffledNames] = useState(() => shuffle(ALL_PORTS));
  const [selectedPortId, setSelectedPortId] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizOrder, setQuizOrder] = useState(() => [...ALL_PORTS]);

  const matchedCount = Object.keys(matched).length;
  const allMatched = matchedCount === ALL_PORTS.length;
  const accuracy =
    attempts > 0 ? Math.round((matchedCount / attempts) * 100) : null;

  const handleReset = () => {
    setShuffledPorts([...ALL_PORTS]);
    setShuffledNames(shuffle(ALL_PORTS));
    setSelectedPortId(null);
    setMatched({});
    setWrong(null);
    setAttempts(0);
  };

  const handlePortClick = (id) => {
    if (matched[id] || wrong) return;
    setSelectedPortId(id === selectedPortId ? null : id);
  };

  const handleNameClick = (id) => {
    if (!selectedPortId || matched[id] || wrong) return;

    setAttempts((a) => a + 1);

    if (selectedPortId === id) {
      setMatched((m) => ({ ...m, [id]: true }));
      setSelectedPortId(null);
    } else {
      setWrong({ portId: selectedPortId, nameId: id });
      setTimeout(() => {
        setWrong(null);
        setSelectedPortId(null);
      }, 700);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Port Matching</h1>
        <p className="text-muted-foreground text-sm">
          Match each port number to its protocol and service name
        </p>
      </div>

      {/* Score & Controls */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4 text-sm">
          <span>
            Matched:{" "}
            <span className="font-bold text-primary">{matchedCount}</span>
            {" / "}
            {ALL_PORTS.length}
          </span>
          {accuracy !== null && (
            <span className="text-muted-foreground">Accuracy: {accuracy}%</span>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={quizMode ? "default" : "outline"}
            size="sm"
            onClick={() => { setQuizMode((v) => !v); setQuizAnswers({}); setQuizOrder([...ALL_PORTS]); }}
            className="gap-1.5"
          >
            <PenLine className="h-4 w-4" />
            {quizMode ? "Exit Quiz" : "Quiz Mode"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="gap-1.5"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
        </div>
      </div>

      <Progress
        value={(matchedCount / ALL_PORTS.length) * 100}
        className="h-1.5 mb-6"
      />

      {/* Completion banner */}
      {allMatched && (
        <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-center">
          <p className="text-green-600 dark:text-green-400 font-semibold">
            All matched! {matchedCount}/{attempts} attempts ({accuracy}%
            accuracy)
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={handleReset}
          >
            Play Again
          </Button>
        </div>
      )}

      {/* Instructions */}
      {!quizMode && !selectedPortId && matchedCount === 0 && (
        <p className="text-xs text-muted-foreground mb-4">
          Click a port number on the left, then click the matching service on
          the right.
        </p>
      )}

      {/* Quiz mode */}
      {quizMode && (
        <div className="rounded-lg border overflow-hidden mb-4">
          <div className="flex items-center justify-between px-4 py-2 bg-muted/40 border-b">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quiz</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { setQuizOrder(shuffle(quizOrder)); setQuizAnswers({}); }}
              className="h-6 px-2 gap-1 text-xs"
            >
              <Shuffle className="h-3 w-3" /> Shuffle
            </Button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wide">
                <th className="text-left px-4 py-2.5 font-semibold">Protocol / Service</th>
                <th className="text-left px-4 py-2.5 font-semibold w-40">Port Number</th>
              </tr>
            </thead>
            <tbody>
              {quizOrder.map(({ id, name, protocol, fullName }, i) => {
                const answer = quizAnswers[id] ?? "";
                const isCorrect = answer.trim() === ALL_PORTS.find((p) => p.id === id).port;
                return (
                  <tr key={id} className={`border-t ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}>
                    <td className="px-4 py-2">
                      <span className="font-medium">{name}</span>
                      <span className="ml-1.5 text-xs text-muted-foreground">({protocol})</span>
                      <span className="ml-1.5 text-xs text-muted-foreground/60">{fullName}</span>
                    </td>
                    <td className="px-3 py-1.5">
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) =>
                          setQuizAnswers((prev) => ({ ...prev, [id]: e.target.value }))
                        }
                        placeholder="Port…"
                        className={`w-full px-3 py-1.5 rounded-md border text-sm font-mono focus:outline-none focus:ring-2 transition-colors ${
                          isCorrect
                            ? "bg-green-500/10 border-green-500/60 text-green-700 dark:text-green-400 focus:ring-green-500/30"
                            : "bg-background border-border focus:ring-primary/30"
                        }`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Two-column matching grid */}
      {!quizMode && (
        <div className="space-y-2">
          {/* Column headers */}
          <div className="grid gap-3" style={{ gridTemplateColumns: "minmax(72px, 110px) 1fr" }}>
            <div className="flex items-center gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mr-auto">
                Port
              </p>
              <Button variant="ghost" size="sm" onClick={() => setShuffledPorts([...ALL_PORTS])} className="h-6 px-1.5">
                <ArrowUpDown className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShuffledPorts(shuffle(shuffledPorts))} className="h-6 px-1.5">
                <Shuffle className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mr-auto">
                Protocol / Service
              </p>
              <Button variant="ghost" size="sm" onClick={() => setShuffledNames(shuffle(shuffledNames))} className="h-6 px-1.5">
                <Shuffle className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Paired rows so heights always match */}
          {shuffledPorts.map(({ id: portId, port }, i) => {
            const nameItem     = shuffledNames[i];
            const portMatched  = matched[portId];
            const portSelected = selectedPortId === portId;
            const portWrong    = wrong?.portId === portId;
            const nameMatched  = nameItem && matched[nameItem.id];
            const nameWrong    = nameItem && wrong?.nameId === nameItem.id;

            return (
              <div key={portId} className="grid gap-3" style={{ gridTemplateColumns: "minmax(72px, 110px) 1fr" }}>
                {/* Port button */}
                <button
                  onClick={() => handlePortClick(portId)}
                  disabled={portMatched}
                  className={`h-full w-full text-left px-2 py-2 rounded-lg border text-sm font-mono font-semibold transition-all ${
                    portMatched
                      ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                      : portWrong
                        ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                        : portSelected
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-background border-border hover:bg-accent cursor-pointer"
                  }`}
                >
                  {portMatched ? (
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" />
                      {port}
                    </span>
                  ) : (
                    port
                  )}
                </button>

                {/* Service button */}
                {nameItem && (
                  <button
                    onClick={() => handleNameClick(nameItem.id)}
                    disabled={nameMatched || !selectedPortId}
                    className={`h-full w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                      nameMatched
                        ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                        : nameWrong
                          ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                          : selectedPortId
                            ? "bg-background border-border hover:bg-accent cursor-pointer"
                            : "bg-background border-border text-muted-foreground cursor-default"
                    }`}
                  >
                    {nameMatched ? (
                      <span className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                        <span>
                          <span className="font-medium">{nameItem.name}</span>
                          <span className="ml-1 text-xs opacity-70">({nameItem.protocol})</span>
                          <span className="block text-xs opacity-60">{nameItem.fullName}</span>
                        </span>
                      </span>
                    ) : (
                      <>
                        <span className="font-medium">{nameItem.name}</span>
                        <span className="ml-1 text-xs text-muted-foreground">({nameItem.protocol})</span>
                        <span className="block text-xs text-muted-foreground/60">{nameItem.fullName}</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
