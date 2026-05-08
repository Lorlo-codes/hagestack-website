import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ icon: Icon, title, description, features, variant = 'default' }) => {
  return (
    <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg ${
      variant === 'large' ? 'md:col-span-2' : ''
    }`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto">
          <Button variant="ghost" className="group transition-all duration-200 active:scale-[0.98]">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;