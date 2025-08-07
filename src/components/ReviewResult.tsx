import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Settings, Sparkles, BookOpen, Shield } from "lucide-react";

interface ReviewResultProps {
  review: string;
}

export const ReviewResult = ({ review }: ReviewResultProps) => {
  const parseReview = (text: string) => {
    const sections = {
      bugs: [] as string[],
      optimizations: [] as string[],
      quality: [] as string[],
      practices: [] as string[],
      security: [] as string[]
    };

    const lines = text.split('\n');
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ✅')) {
        sections.bugs.push(trimmed.substring(4));
      } else if (trimmed.startsWith('- ⚙️')) {
        sections.optimizations.push(trimmed.substring(4));
      } else if (trimmed.startsWith('- 🧹')) {
        sections.quality.push(trimmed.substring(4));
      } else if (trimmed.startsWith('- 📚')) {
        sections.practices.push(trimmed.substring(4));
      } else if (trimmed.startsWith('- 🔒')) {
        sections.security.push(trimmed.substring(4));
      }
    });

    return sections;
  };

  const sections = parseReview(review);

  const ReviewSection = ({ 
    title, 
    items, 
    icon: Icon, 
    variant 
  }: { 
    title: string; 
    items: string[]; 
    icon: any; 
    variant: "default" | "secondary" | "destructive" | "outline";
  }) => {
    if (items.length === 0) return null;

    return (
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon className="h-5 w-5" />
            {title}
            <Badge variant={variant} className="ml-auto">
              {items.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground pl-4 border-l-2 border-border">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full max-w-4xl space-y-4">
      <h2 className="text-2xl font-bold">Code Review Results</h2>
      
      <ReviewSection
        title="Bugs & Logical Errors"
        items={sections.bugs}
        icon={CheckCircle}
        variant="destructive"
      />
      
      <ReviewSection
        title="Optimization Suggestions"
        items={sections.optimizations}
        icon={Settings}
        variant="default"
      />
      
      <ReviewSection
        title="Code Quality Improvements"
        items={sections.quality}
        icon={Sparkles}
        variant="secondary"
      />
      
      <ReviewSection
        title="Best Practices"
        items={sections.practices}
        icon={BookOpen}
        variant="outline"
      />
      
      <ReviewSection
        title="Security Concerns"
        items={sections.security}
        icon={Shield}
        variant="destructive"
      />
    </div>
  );
};