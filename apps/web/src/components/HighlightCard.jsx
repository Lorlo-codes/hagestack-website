import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HighlightCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_35px_-22px_rgba(0,0,0,0.9)]">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl border border-primary/25 bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;