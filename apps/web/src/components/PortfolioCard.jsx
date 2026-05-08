import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioCard = ({ title, industry, description, technologies, outcome, image }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden">
      {image && (
        <div className="w-full h-48 bg-muted overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {industry}
          </Badge>
        </div>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        {outcome && (
          <div className="mt-auto pt-4 border-t">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1 block">
              Outcome
            </span>
            <p className="text-sm text-foreground font-medium">{outcome}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;