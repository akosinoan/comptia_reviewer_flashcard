import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, CheckCircle2, Shuffle, ArrowUpDown } from "lucide-react";

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
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="gap-1.5"
        >
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
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
      {!selectedPortId && matchedCount === 0 && (
        <p className="text-xs text-muted-foreground mb-4">
          Click a port number on the left, then click the matching service on
          the right.
        </p>
      )}

      {/* Two-column matching grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Left: Port Numbers */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Port Number
            </p>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShuffledPorts([...ALL_PORTS])}
                className="h-6 px-2 gap-1 text-xs"
              >
                <ArrowUpDown className="h-3 w-3" /> Sort
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShuffledPorts(shuffle(shuffledPorts))}
                className="h-6 px-2 gap-1 text-xs"
              >
                <Shuffle className="h-3 w-3" /> Shuffle
              </Button>
            </div>
          </div>
          {shuffledPorts.map(({ id, port }) => {
            const isMatched = matched[id];
            const isSelected = selectedPortId === id;
            const isWrong = wrong?.portId === id;
            return (
              <button
                key={id}
                onClick={() => handlePortClick(id)}
                disabled={isMatched}
                className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm font-mono font-semibold transition-all ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : isWrong
                      ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                      : isSelected
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-background border-border hover:bg-accent cursor-pointer"
                }`}
              >
                {isMatched ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    {port}
                  </span>
                ) : (
                  port
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Service Names (shuffled) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Protocol / Service
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShuffledNames(shuffle(shuffledNames))}
              className="h-6 px-2 gap-1 text-xs"
            >
              <Shuffle className="h-3 w-3" /> Shuffle
            </Button>
          </div>
          {shuffledNames.map(({ id, protocol, name, fullName }) => {
            const isMatched = matched[id];
            const isWrong = wrong?.nameId === id;
            return (
              <button
                key={id}
                onClick={() => handleNameClick(id)}
                disabled={isMatched || !selectedPortId}
                className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : isWrong
                      ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                      : selectedPortId
                        ? "bg-background border-border hover:bg-accent cursor-pointer"
                        : "bg-background border-border text-muted-foreground cursor-default"
                }`}
              >
                {isMatched ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>
                      <span className="font-medium">{name}</span>
                      <span className="ml-1.5 text-xs opacity-70">
                        ({protocol})
                      </span>
                      <span className="block text-xs opacity-60">
                        {fullName}
                      </span>
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center justify-between gap-2">
                    <span>
                      <span className="font-medium">{name}</span>
                      <span className="ml-1.5 text-xs text-muted-foreground">
                        ({protocol})
                      </span>
                    </span>
                    <span className="text-xs text-muted-foreground/60 text-right shrink-0">
                      {fullName}
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
