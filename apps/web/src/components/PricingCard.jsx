'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingCard = ({ tier, price, description, features, highlighted = false, popular = false }) => {
  return (
    <Card
      className={`h-full flex flex-col transition-all duration-300 ${
        highlighted
          ? 'scale-105 ring-2 ring-primary shadow-xl'
          : 'hover:shadow-lg'
      }`}
    >
      <CardHeader>
        {popular && (
          <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">
            Most popular
          </Badge>
        )}
        <CardTitle className="text-2xl">{tier}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-foreground">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button
            asChild
            className={`w-full transition-all duration-200 active:scale-[0.98] ${
              highlighted ? 'bg-primary text-primary-foreground' : ''
            }`}
            variant={highlighted ? 'default' : 'outline'}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;