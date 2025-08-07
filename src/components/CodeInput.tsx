import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react";

interface CodeInputProps {
  onReview: (code: string) => void;
  isLoading: boolean;
}

export const CodeInput = ({ onReview, isLoading }: CodeInputProps) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (code.trim()) {
      onReview(code);
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="h-5 w-5" />
          Python Code Review
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your Python code here for review..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="min-h-[300px] font-mono text-sm"
        />
        <Button 
          onClick={handleSubmit} 
          disabled={!code.trim() || isLoading}
          className="w-full"
        >
          {isLoading ? "Reviewing..." : "Review Code"}
        </Button>
      </CardContent>
    </Card>
  );
};