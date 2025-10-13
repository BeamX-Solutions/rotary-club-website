import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  MessageSquare,
  Calendar,
  Banknote,
  FileText,
  Building2,
  DollarSign,
  Navigation,
  Download,
  Award,
  CheckCircle,
  Info
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Interest Registered Successfully!",
      description: "Our team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const rotaryContacts = [
    {
      name: 'RTN. AKINLABI AKINTAYO',
      title: 'Technical Director, TRABERG Construction',
      phones: ['+234 (0) 8165423226', '+234 (0) 9137797198']
    },
    {
      name: 'RTN. BUSAYO OWAH',
      title: 'CEO, KORRECT HOMES',
      phones: ['+234 (0) 8149017989', '+234 (0) 8060340863']
    },
    {
      name: 'RTN. AFOLABI OLUFUNMILAYO',
      title: 'Secretary, RC Lekki Golden',
      phones: ['+234 (0) 7019080535']
    },
    {
      name: 'RTN. OBINNA NWEKE',
      title: 'Principal Consultant, BeamX Solutions',
      phones: ['+234 (0) 8164711076', '+1 (414) 350-6035']
    },
    {
      name: 'RTN. VICTOR ITOTOI',
      title: 'Membership Chair, RC Falomo',
      phones: ['+234 (0) 8023209322']
    },
    {
      name: 'RTN. AGNES',
      title: 'Youth Service Chair, RC Lekki Golden',
      phones: ['+234 (0) 7034970389']
    }
  ];

  const paymentInfo = [
    {
      icon: Building2,
      title: '3-Bedroom Duplex',
      details: [
        { label: 'Off-Plan Price', value: '₦65M' },
        { label: 'Initial Deposit', value: '₦5M' },
        { label: 'Full Payment', value: '₦70M' },
        { label: 'Payment Duration', value: '18 Months' },
        { label: 'Monthly Payment', value: '₦3.3M' },
        { label: 'Interest Rate', value: 'Zero Interest' },
        { label: 'Units Available', value: '32 Units' }
      ]
    },
    {
      icon: Building2,
      title: '4-Bedroom Duplex',
      details: [
        { label: 'Off-Plan Price', value: '₦75M' },
        { label: 'Initial Deposit', value: '₦8M' },
        { label: 'Full Payment', value: '₦80M' },
        { label: 'Payment Duration', value: '18 Months' },
        { label: 'Monthly Payment', value: '₦3.7M' },
        { label: 'Interest Rate', value: 'Zero Interest' },
        { label: 'Units Available', value: '2 Units' }
      ]
    }
  ];

  const documentInfo = [
    {
      title: 'What You Receive',
      items: [
        'Receipt of payment',
        'Survey Plan (Registered)',
        'Deed of Assignment',
        'Certificate of Occupancy (C of O) in view',
        'Contract of Sale'
      ]
    },
    {
      title: 'Payment Details',
      items: [
        'Bank: PROVIDUS BANK',
        'Account Number: 1308280039',
        'Account Name: ROTARY WHEEL\'S COURT',
        'Payment Plans: 18 Months',
        'Zero Interest Option Available'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="pt-40 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to invest in your future? Let's discuss how Rotary Wheels Court can be your next great investment
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Quick Response Guaranteed
              </Badge>
              <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                <Banknote className="w-4 h-4 mr-2" />
                Flexible Payment Plans
              </Badge>
              <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                <FileText className="w-4 h-4 mr-2" />
                Oct 2025 - Nov 2025 Offer
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-accent" />
                    Express Your Interest
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will reach out to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Phone Number *
                        </label>
                        <Input
                          placeholder="+234 xxx xxx xxxx"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Property Interest
                        </label>
                        <select
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                          value={formData.propertyType}
                          onChange={(e) => handleInputChange('propertyType', e.target.value)}
                        >
                          <option value="">Select property type</option>
                          <option value="3-bedroom">3 Bedroom Terraced Duplex (₦65M)</option>
                          <option value="4-bedroom">4 Bedroom Semi-Detached (₦75M)</option>
                          <option value="both">Both Property Types</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message (Optional)
                      </label>
                      <Textarea
                        placeholder="Tell us about your investment goals, preferred payment plan, or any questions you have..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>

                    <Button type="submit" variant="golden" size="lg" className="w-full">
                      Submit Interest
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Project Location */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    Project Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Marshy-Hills Estate</strong><br />
                    Addo Road, Ajah, Lekki<br />
                    Lagos State, Nigeria
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Accessibility:</strong> Central to shopping malls, schools, fuel stations, and essential infrastructure
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Site visits available by appointment
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="bg-accent/10 border-accent/20 shadow-golden">
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary mb-4">Why Choose Rotary Wheels Court?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-3" />
                      Zero interest payment plans available
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-3" />
                      Rotary quality assurance and ethics
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-3" />
                      Prime location in Lekki with growth potential
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-3" />
                      Excellent rental income opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-3" />
                      Completion guaranteed by February 2027
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <section className="mb-16">
            <Card className="shadow-luxury overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center">
                  <Navigation className="w-6 h-6 mr-2 text-accent" />
                  Location Map
                </CardTitle>
                <p className="text-muted-foreground">
                  Visit us at Marshy-Hills Estate, Addo Road, Ajah, Lekki
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-secondary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8392559618903!2d3.5789347!3d6.5116467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sAddo%20Road%2C%20Ajah%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Brochure Download Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Project Brochures
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download detailed information about Rotary Wheels Court. Choose from our comprehensive brochures to learn more about the project, investment opportunities, and payment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    Rotary Wheels Court - Master Brochure
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comprehensive brochure featuring project overview, property specifications, amenities, payment plans, and investment highlights.
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        25 Pages
                      </span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        5.1 MB
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-primary mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Complete project overview
                        </li>
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Property specifications & floor plans
                        </li>
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Amenities & facilities details
                        </li>
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Investment benefits & payment plans
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button 
                    variant="golden" 
                    className="w-full mt-auto"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/brochures/rotary-wheels-court-brochure.pdf';
                      link.download = 'Rotary-Wheels-Court-Brochure.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    Interior & Exterior Design
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Detailed showcase of the stunning interior finishes and exterior architecture featuring premium finishes and modern design elements.
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        27 Pages
                      </span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        4 MB
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-primary mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Interior design showcases
                        </li>
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Exterior architecture details
                        </li>
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Premium finishes & materials
                        </li>
                        <li className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent mt-0.5 flex-shrink-0" />
                          Modern design elements
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button 
                    variant="golden" 
                    className="w-full mt-auto"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/brochures/interior-exterior-design.pdf';
                      link.download = 'Interior-Exterior-Design.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Info Box */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Need More Information?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download our brochures to get comprehensive details about the project, property specifications, investment opportunities, and payment plans. All documents are in PDF format and can be saved for future reference.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Note:</strong> For the most current information, please contact our sales team or visit the project site.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pricing Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Payment Plans & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paymentInfo.map((property, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary flex items-center">
                      <property.icon className="w-5 h-5 mr-2 text-accent" />
                      {property.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {property.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center pb-2 border-b border-secondary">
                          <span className="text-sm text-muted-foreground">{detail.label}</span>
                          <span className="font-semibold text-primary">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Documentation & Payment Details */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Documentation & Payment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {documentInfo.map((section, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-primary flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-accent" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent mr-3 font-bold">✓</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Rotary Team Contacts */}
          <section className="mb-16">
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-accent" />
                  Rotary Team Contacts
                </CardTitle>
                <p className="text-muted-foreground">
                  Speak directly with our Rotary project team members for personalized assistance
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rotaryContacts.map((contact, index) => (
                    <div key={index} className="p-4 bg-secondary/30 rounded-lg border border-secondary/50">
                      <p className="font-bold text-primary text-sm mb-1">{contact.name}</p>
                      <p className="text-xs text-accent mb-3">{contact.title}</p>
                      <div className="space-y-2">
                        {contact.phones.map((phone, phoneIdx) => (
                          <a
                            key={phoneIdx}
                            href={`tel:${phone}`}
                            className="text-accent hover:text-accent-hover transition-colors font-medium text-sm block"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Special Offer Banner */}
          <Card className="bg-gradient-luxury text-white shadow-luxury">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Special Off-Plan Offer</h3>
                <p className="text-white/90 mb-4">
                  Limited time offer: October 2025 - November 2025
                </p>
                <p className="text-lg mb-6">
                  Secure your property now at introductory prices with flexible payment terms
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-center">
                    <p className="text-sm text-white/80">3-Bedroom Duplex</p>
                    <p className="text-3xl font-bold">₦65M</p>
                    <p className="text-xs text-white/70">Save ₦5M</p>
                  </div>
                  <div className="hidden sm:block text-white/50 text-2xl">•</div>
                  <div className="text-center">
                    <p className="text-sm text-white/80">4-Bedroom Duplex</p>
                    <p className="text-3xl font-bold">₦75M</p>
                    <p className="text-xs text-white/70">Save ₦5M</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;