
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import BmiCalculator from '@/components/BmiCalculator';
import BmiTable from '@/components/BmiTable';
import InfoCard from '@/components/InfoCard';
import ScrollToTop from '@/components/ScrollToTop';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldAlert, Ruler, ActivitySquare, Trophy, HelpCircle } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-bmi-light-purple py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Body Mass Index (BMI) Table for Women
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Understand your weight status, discover what it means for your health, and get personalized insights
            </p>
            <Button size="lg" className="bg-bmi-purple hover:bg-bmi-dark-purple">
              Calculate Your BMI <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
        
        {/* Problem Section */}
        <ContentSection id="problem" title="Why BMI Matters for Women's Health" className="bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Many women struggle with understanding their weight status</strong> and what it means for their overall health. Generic weight charts don't account for important factors specific to women's bodies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Traditional BMI calculations often fail to consider female-specific factors like:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
                  <span>Hormonal changes throughout life stages</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
                  <span>Different body composition compared to men</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
                  <span>Post-pregnancy body changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldAlert className="text-bmi-purple mt-1 flex-shrink-0" />
                  <span>Menopause and its effects on weight distribution</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <BmiCalculator />
            </div>
          </div>
        </ContentSection>
        
        {/* Solution/Benefits Section */}
        <ContentSection id="solution" title="Complete Women's BMI Guide" className="bg-gray-50">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Our BMI Guide Provides:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Ruler className="text-bmi-purple mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Accurate Measurement</p>
                    <p className="text-gray-600">BMI categories specifically optimized for women's health concerns</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ActivitySquare className="text-bmi-purple mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Health Risk Assessment</p>
                    <p className="text-gray-600">Understanding what your BMI means for your specific health situation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="text-bmi-purple mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Alternative Measurement Methods</p>
                    <p className="text-gray-600">Beyond BMI: other ways to assess your body composition</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <BmiTable />
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-center">BMI vs Alternative Methods</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Convenience</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">BMI</td>
                    <td className="px-6 py-4 whitespace-nowrap">Moderate</td>
                    <td className="px-6 py-4 whitespace-nowrap">High</td>
                    <td className="px-6 py-4 whitespace-nowrap">Free</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Waist Circumference</td>
                    <td className="px-6 py-4 whitespace-nowrap">Good</td>
                    <td className="px-6 py-4 whitespace-nowrap">High</td>
                    <td className="px-6 py-4 whitespace-nowrap">Free</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Waist-to-Hip Ratio</td>
                    <td className="px-6 py-4 whitespace-nowrap">Very Good</td>
                    <td className="px-6 py-4 whitespace-nowrap">High</td>
                    <td className="px-6 py-4 whitespace-nowrap">Free</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">DXA Scan</td>
                    <td className="px-6 py-4 whitespace-nowrap">Excellent</td>
                    <td className="px-6 py-4 whitespace-nowrap">Low</td>
                    <td className="px-6 py-4 whitespace-nowrap">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>
        
        {/* Top Picks / Reviews Section */}
        <ContentSection id="top-picks" title="Recommended Resources" className="bg-white">
          <p className="text-lg text-gray-700 mb-8">
            To support your health journey, we've selected some of the best tools and resources to help you understand and manage your BMI effectively.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              title="Smart Body Analyzer Scale"
              imagePath="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3"
              pros={["Measures BMI automatically", "Syncs with smartphone apps", "Tracks progress over time"]}
              cons={["More expensive than regular scales", "Requires battery replacement"]}
              link="#body-analyzer"
            />
            
            <ProductCard
              title="Women's Complete Health Guide"
              imagePath="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3"
              pros={["In-depth coverage of women's health", "Written by medical professionals", "Includes BMI and beyond"]}
              cons={["Extensive reading material", "Some medical terminology"]}
              link="#health-guide"
            />
            
            <ProductCard
              title="Nutritional Consultation Service"
              imagePath="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3"
              pros={["Personalized nutrition plans", "Professional guidance", "Regular follow-ups"]}
              cons={["Higher cost investment", "Requires commitment"]}
              link="#nutrition-service"
            />
          </div>
        </ContentSection>
        
        {/* FAQ Section */}
        <ContentSection id="faq" title="Frequently Asked Questions" className="bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>What is considered a healthy BMI range for women?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  A healthy BMI range for adults, including women, is generally considered to be between 18.5 and 24.9. However, it's important to remember that BMI is just one indicator of health and should be considered alongside other factors.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>Does the ideal BMI for women change with age?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  BMI ranges themselves do not typically change with age in standard classifications for adults 20 and older. However, body composition (muscle, fat, bone) changes with age and menopause, which affects how accurate BMI is as an indicator of health or body fat percentage. Therefore, while the BMI number is calculated the same way, its interpretation in older women or postmenopausal women requires considering these age-related changes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>How accurate is BMI for assessing a woman's health?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  BMI is a useful screening tool and correlates with body fat at a population level, but it is not always accurate for individuals. It doesn't distinguish between fat, muscle, and bone, and its accuracy can be limited by factors like muscle mass, age, body fat distribution, and menopausal status.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>How does pregnancy affect BMI and weight recommendations?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Weight gain recommendations during a single pregnancy are based on your pre-pregnancy BMI. It's important to consult with a healthcare professional to determine healthy weight gain goals during pregnancy based on your specific needs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium flex">
                  <HelpCircle className="mr-2 text-bmi-purple flex-shrink-0" />
                  <span>What are some alternatives to BMI for women?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Alternative methods include waist circumference measurement (should be less than 35 inches or 88 cm for women), waist-to-hip ratio (ideally 0.85 or below for women), body fat percentage testing, and more advanced clinical methods like DXA scans. These can provide a more comprehensive picture of health than BMI alone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Hidden FAQ Schema for SEO */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is considered a healthy BMI range for women?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A healthy BMI range for adults, including women, is generally considered to be between 18.5 and 24.9. However, it's important to remember that BMI is just one indicator of health and should be considered alongside other factors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does the ideal BMI for women change with age?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMI ranges themselves do not typically change with age in standard classifications for adults 20 and older. However, body composition (muscle, fat, bone) changes with age and menopause, which affects how accurate BMI is as an indicator of health or body fat percentage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate is BMI for assessing a woman's health?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMI is a useful screening tool and correlates with body fat at a population level, but it is not always accurate for individuals. It doesn't distinguish between fat, muscle, and bone, and its accuracy can be limited by factors like muscle mass, age, body fat distribution, and menopausal status."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does pregnancy affect BMI and weight recommendations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Weight gain recommendations during a single pregnancy are based on your pre-pregnancy BMI. It's important to consult with a healthcare professional to determine healthy weight gain goals during pregnancy based on your specific needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are some alternatives to BMI for women?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Alternative methods include waist circumference measurement (should be less than 35 inches or 88 cm for women), waist-to-hip ratio (ideally 0.85 or below for women), body fat percentage testing, and more advanced clinical methods like DXA scans."
                  }
                }
              ]
            }
          `}} />
        </ContentSection>
        
        {/* Testimonial Section */}
        <ContentSection id="testimonials" title="What Women Are Saying" className="bg-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="italic text-gray-600 mb-4">"This BMI guide helped me understand why traditional BMI measurements weren't giving me the full picture. The alternative measurement methods were eye-opening!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bmi-purple flex items-center justify-center text-white font-semibold">SL</div>
                <div>
                  <p className="font-medium">Sarah L.</p>
                  <p className="text-sm text-gray-500">Age 42, Fitness Coach</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="italic text-gray-600 mb-4">"After pregnancy, I was worried about my weight. This guide helped me understand how to interpret my BMI during the postpartum period and set realistic goals."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bmi-purple flex items-center justify-center text-white font-semibold">JT</div>
                <div>
                  <p className="font-medium">Jennifer T.</p>
                  <p className="text-sm text-gray-500">Age 35, New Mom</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="italic text-gray-600 mb-4">"As a woman over 60, I appreciated the insights about how BMI interpretation changes with age. The waist-to-hip ratio measurement was much more useful for me."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bmi-purple flex items-center justify-center text-white font-semibold">MM</div>
                <div>
                  <p className="font-medium">Margaret M.</p>
                  <p className="text-sm text-gray-500">Age 64, Retired Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
