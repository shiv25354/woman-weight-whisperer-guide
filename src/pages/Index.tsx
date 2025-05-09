
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

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-bmi-light-purple py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Body Mass Index (BMI) Table for Women
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding your weight status and what it means for your health
            </p>
          </div>
        </section>
        
        {/* Introduction */}
        <ContentSection id="introduction" title="Introduction to BMI">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              Body Mass Index (BMI) is a calculated measure of a person's weight relative to their height. 
              It is often used as a general indicator of whether a person has a healthy body weight for their height. 
              For adults aged 20 and older, including women, BMI values are typically categorised into underweight, 
              healthy weight, overweight, and obesity.
            </p>
            <p className="text-lg text-gray-700">
              While widely used, BMI is considered an estimate and has notable limitations, particularly when assessing 
              individuals. It should be used as one potential health indicator among many others.
            </p>
          </div>
        </ContentSection>

        {/* Calculator Section */}
        <ContentSection id="calculator" title="How to Find Your BMI">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose max-w-none">
              <p className="mb-4">
                To find your BMI, you need your weight and height. The standard method involves dividing 
                a person's weight in kilograms by the square of their height in meters.
              </p>
              <p className="mb-4">
                The formula for BMI calculation is:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg text-center mb-6">
                <p className="font-semibold">BMI = weight(kg) / [height(m)]²</p>
              </div>
              <p>
                Alternatively, you can use our BMI calculator which performs this calculation for you. 
                Our calculator allows input in both metric (kg, cm) and US customary units (pounds, inches).
              </p>
            </div>
            <BmiCalculator />
          </div>
        </ContentSection>

        {/* BMI Categories Section */}
        <ContentSection id="categories" title="Adult BMI Categories and Table" className="bg-gray-50">
          <div className="mb-8">
            <p className="text-lg mb-6">
              Once you have calculated your BMI, you can determine your weight category based on standard ranges. 
              The World Health Organization (WHO) and other health bodies use the following classifications for adults 
              aged 20 and over, applicable to both men and women:
            </p>
            <BmiTable />
          </div>
        </ContentSection>

        {/* Understanding Your BMI Category */}
        <ContentSection id="understanding" title="Understanding Your BMI Category">
          <p className="text-lg mb-6">
            BMI provides a quick estimate of your weight status. Being in the healthy weight range (18.5 to 24.9) 
            is one way to support overall health. However, BMI is not a diagnostic tool for disease or illness. 
            It is a screening measure.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <InfoCard 
              title="Health Risks of Being Overweight or Obese" 
              headerClassName="bg-bmi-overweight/10"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>High blood pressure</li>
                <li>Type 2 diabetes</li>
                <li>High cholesterol</li>
                <li>Coronary heart disease</li>
                <li>Stroke</li>
                <li>Gallbladder disease</li>
                <li>Osteoarthritis</li>
                <li>Sleep apnea</li>
                <li>Certain cancers</li>
                <li>Mental illnesses</li>
                <li>Body pains</li>
                <li>Difficulty with physical functions</li>
                <li>Increased risk of mortality</li>
              </ul>
            </InfoCard>
            
            <InfoCard 
              title="Health Risks of Being Underweight" 
              headerClassName="bg-bmi-underweight/10"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Malnutrition</li>
                <li>Vitamin deficiencies</li>
                <li>Anemia</li>
                <li>Osteoporosis</li>
                <li>Decreased immune function</li>
                <li>Growth/development issues (particularly in children and teens)</li>
                <li>Reproductive issues in women</li>
                <li>Hormonal imbalances</li>
                <li>Higher chance of miscarriage in the first trimester</li>
                <li>Complications from surgery</li>
                <li>Increased risk of mortality compared to those with a healthy BMI</li>
              </ul>
            </InfoCard>
          </div>
        </ContentSection>

        {/* Limitations of BMI Section */}
        <ContentSection id="limitations" title="Limitations of BMI for Women" className="bg-gray-50">
          <p className="text-lg mb-8">
            BMI is an estimate and does not take body composition into account. It measures excess body weight, 
            not specifically excess body fat. This is a significant limitation, especially for women, as factors 
            like age, sex, ethnicity, muscle mass, and body fat distribution influence its accuracy.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Muscle Mass" className="h-full">
              <p>
                Muscle tissue is denser than fat tissue. Women with high muscle mass (e.g., athletes) may have a 
                high BMI that classifies them as overweight or obese, even if they have a low body fat percentage 
                and lower health risks than someone with the same BMI but less muscle.
              </p>
            </InfoCard>
            
            <InfoCard title="Body Fat Distribution" className="h-full">
              <p>
                While BMI correlates with body fat levels, it doesn't distinguish where the fat is located. 
                Abdominal fat (belly fat) is a key indicator of risk for weight-related diseases. Women with a 
                moderate BMI but high abdominal fat may still be at higher risk for metabolic syndrome.
              </p>
            </InfoCard>
            
            <InfoCard title="Age and Hormones" className="h-full">
              <p>
                Body composition changes with age, with muscle mass often decreasing and belly fat increasing. 
                Hormonal changes, particularly related to menopause, can affect body composition. Postmenopausal 
                women may have high body fat percentages while maintaining a moderate BMI.
              </p>
            </InfoCard>
            
            <InfoCard title="Race and Ethnicity" className="h-full">
              <p>
                BMI doesn't inherently distinguish between different racial or ethnic backgrounds, but body 
                composition and fat distribution can differ. For example, Asian and South Asian populations tend 
                to have more body fat relative to weight and increased health risks at lower BMI levels.
              </p>
            </InfoCard>
            
            <InfoCard title="Pregnancy" className="h-full">
              <p>
                Weight gain during pregnancy follows specific recommendations based on pre-pregnancy BMI. 
                Healthcare providers offer guidance for healthy weight gain during pregnancy, considering 
                individual needs.
              </p>
            </InfoCard>
            
            <InfoCard title="BMI as a Screening Tool" className="h-full">
              <p>
                Due to these limitations, BMI alone should not be the sole method for determining a person's 
                healthy body weight or health status. It's a starting point, but a comprehensive health 
                assessment requires considering other factors.
              </p>
            </InfoCard>
          </div>
        </ContentSection>

        {/* Alternative Methods Section */}
        <ContentSection id="alternatives" title="Other Methods for Assessing Weight and Health">
          <p className="text-lg mb-8">
            Because of BMI's limitations, other methods can provide a more comprehensive understanding of health 
            and body composition, especially for women.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard title="Waist Circumference" className="h-full">
              <p>
                Measures belly fat directly, which is a strong indicator of risk for weight-related diseases. 
                A waist circumference greater than 35 inches (88 cm) for women indicates an increased health risk.
              </p>
            </InfoCard>
            
            <InfoCard title="Waist-to-Hip Ratio (WHR)" className="h-full">
              <p>
                Calculated by dividing waist measurement by hip measurement, it assesses abdominal fat distribution. 
                A WHR of 0.85 or below for women is associated with a low risk for weight-related disease according to the WHO.
              </p>
            </InfoCard>
          </div>

          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Clinical Diagnostic Methods</h3>
            <p className="mb-4">
              More precise methods exist, often used in clinical or research settings:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Densitometry (underwater weighing)</strong>: Measures body density to calculate body fat percentage</li>
              <li><strong>Dual energy X-ray absorptiometry (DXA)</strong>: Provides detailed body composition analysis</li>
              <li><strong>Bioelectrical impedance analysis (BIA)</strong>: Estimates body composition through electrical resistance</li>
              <li><strong>Skinfold measurements</strong>: Uses calipers to measure subcutaneous fat</li>
            </ul>
          </div>
        </ContentSection>

        {/* Healthcare Provider Section */}
        <ContentSection id="healthcare" title="Discuss Your BMI with Your Healthcare Provider" className="bg-gray-50">
          <div className="prose max-w-none">
            <p className="text-lg">
              Your BMI is just one piece of your overall health picture. It is highly recommended to discuss your BMI 
              and weight category with your healthcare provider. They can help you understand what your BMI means in 
              the context of your individual medical history, health behaviours, physical exam findings, and laboratory findings.
            </p>
            <p className="text-lg mt-4">
              A doctor can determine possible reasons for being underweight or having excess weight and recommend 
              appropriate support or treatment. Always consult healthcare professionals before making significant 
              changes to your diet or exercise routine.
            </p>
          </div>
        </ContentSection>

        {/* FAQ Section */}
        <ContentSection id="faq" title="Frequently Asked Questions About BMI for Women">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                What is considered a healthy BMI range for women?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                A healthy BMI range for adults, including women, is generally considered to be between 18.5 and 24.9.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Does the ideal BMI for women change with age?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                BMI ranges themselves do not typically change with age in standard classifications for adults 20 and older. 
                However, body composition (muscle, fat, bone) changes with age and menopause, which affects how accurate 
                BMI is as an indicator of health or body fat percentage. Therefore, while the BMI number is calculated 
                the same way, its interpretation in older women or postmenopausal women requires considering these 
                age-related changes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Does BMI vary by race or ethnicity for women?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Standard BMI categories apply to adults regardless of race or ethnicity. However, research shows that 
                body composition and health risks associated with BMI can differ across racial and ethnic groups. 
                For example, different BMI cutoffs have been suggested for Asian populations due to higher body fat 
                relative to weight and increased health risks at lower BMIs. Healthcare professionals may consider a 
                person's ethnicity, among other factors, when interpreting BMI.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                How accurate is BMI for assessing a woman's health?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                BMI is a useful screening tool and correlates with body fat at a population level, but it is not 
                always accurate for individuals. It doesn't distinguish between fat, muscle, and bone, and its 
                accuracy can be limited by factors like muscle mass, age, body fat distribution, and menopausal status.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Should I rely solely on BMI to assess my health?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                No, BMI should not be the only factor used to assess your health. Healthcare providers consider many 
                factors, including medical history, physical activity, diet, blood test results, sleep habits, and 
                other physical assessments, alongside BMI.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                How does pregnancy affect BMI and weight recommendations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Weight gain recommendations during a single pregnancy are based on your pre-pregnancy BMI. It's important 
                to consult with a healthcare professional to determine healthy weight gain goals during pregnancy based 
                on your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>

        {/* Conclusion Section */}
        <ContentSection id="conclusion" title="The Bottom Line" className="bg-bmi-light-purple">
          <div className="prose max-w-none">
            <p className="text-lg">
              Body Mass Index (BMI) is a widely used, simple, and inexpensive screening tool to estimate weight status 
              in adults, including women. While it can indicate potential health risks associated with being underweight 
              or overweight/obese, BMI has significant limitations.
            </p>
            <p className="text-lg mt-4">
              It does not account for body composition differences related to muscle mass, age, body fat distribution, 
              race/ethnicity, or menopausal status. Therefore, BMI should always be considered alongside other health 
              factors and discussed with a healthcare professional for a proper assessment of your overall health and well-being.
            </p>
          </div>
        </ContentSection>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
