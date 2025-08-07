import { useState } from "react";
import { CodeInput } from "@/components/CodeInput";
import { ReviewResult } from "@/components/ReviewResult";
import { reviewCode } from "@/utils/codeReviewer";

const Index = () => {
  const [review, setReview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReview = async (code: string) => {
    setIsLoading(true);
    try {
      const result = await reviewCode(code);
      setReview(result);
    } catch (error) {
      console.error("Review failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Python Code Reviewer</h1>
          <p className="text-xl text-muted-foreground">Get expert feedback on your Python code</p>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <CodeInput onReview={handleReview} isLoading={isLoading} />
          {review && <ReviewResult review={review} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
