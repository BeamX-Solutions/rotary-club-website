import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, TrendingUp, Shield, Target, Heart, Building2, CheckCircle, Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const rotaryValues = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every aspect of Rotary Wheels Court is built to the highest standards, ensuring premium construction quality and superior finishing that stands the test of time.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Designed specifically for Rotary members and like-minded investors who value ethics, quality, and community-driven development.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Growth',
      description: 'Strategically located in prime Lekki, offering excellent appreciation potential and strong rental income opportunities for investors.'
    },
    {
      icon: Shield,
      title: 'Trust & Ethics',
      description: 'Backed by the reputation and ethical standards of Rotary Club of Lekki Golden, ensuring transparency and accountability throughout.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Project Conception',
      description: 'RC Lekki Golden identified the need for quality, affordable housing for members and investors'
    },
    {
      year: '2024',
      title: 'Development Phase',
      description: 'Construction commenced with focus on premium quality and timely delivery'
    },
    {
      year: '2025',
      title: 'Project Completion',
      description: 'Expected completion in October-November 2025, ready for handover to investors'
    }
  ];

  const whyChooseUs = [
    'Developed by trusted Rotary Club of Lekki Golden',
    'Prime location in Marshy-Hills Estate, Lekki',
    'Flexible payment plans with zero interest options',
    'High rental yield potential in premium location',
    'Quality construction with premium finishes',
    'Ready for occupation by end of 2025',
    'Excellent investment appreciation potential',
    'Community-focused development',
    'Lifetime ownership with full asset control',
    'Deed of Assignment with full documentation',
    'Modern amenities and facilities',
    'Strategic location near schools and malls'
  ];

  const projectDetails = [
    {
      icon: Building2,
      title: '32 Units',
      description: '3-Bedroom Terraced Duplexes with BQ'
    },
    {
      icon: Briefcase,
      title: '2 Units',
      description: '4-Bedroom Semi-Detached Duplexes with BQ'
    },
    {
      icon: CheckCircle,
      title: 'Completion',
      description: 'February 2027 (Final delivery date)'
    }
  ];

  const developmentTeam = [
    {
      name: 'RTN. Akinlabi Akintayo',
      role: 'Development Originator & Technical Director',
      company: 'TRABERG Construction and Development',
      experience: 'Four-time RC Lekki Golden Service Projects Chair'
    },
    {
      name: 'TRABERG Construction and Development',
      role: 'Development Partner',
      company: 'Architectural & Real Estate Development',
      experience: 'Specializing in residential and commercial properties with comprehensive consultancy'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Rotary Wheels Court
            </h1>
            <p className="text-xl text-white/90 mb-6">
              A premium real estate service project by Rotary Club of Lekki Golden
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We are committed to providing quality, affordable housing solutions for our members and discerning investors, 
              combining the Rotary principles of service, ethics, and excellence with modern real estate development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create exceptional living spaces that embody the Rotary values of service, integrity, and excellence, 
                  while providing our members and investors with premium real estate opportunities in prime Lagos locations. We envision a community of sophisticated, ethical investors enjoying luxury living with strong financial returns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver high-quality, affordable housing solutions that meet the needs of Rotary members and investors, 
                  ensuring transparency, ethical practices, and exceptional value in every project we undertake. We are dedicated to creating sustainable investments with lasting community impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rotary Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The Rotary Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of investing with Rotary Club of Lekki Golden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rotaryValues.map((value, index) => (
              <Card key={index} className="group text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive development combining luxury, sustainability, and investment potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {projectDetails.map((detail, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <detail.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Location & Infrastructure</h3>
              <p className="mb-4">
                <strong>Marshy-Hills Estate, Addo Road, Ajah, Lekki, Lagos</strong>
              </p>
              <p className="text-white/90">
                Strategically positioned in one of the best neighborhoods in Lekki-Ajah, central to shopping malls, schools, fuel stations, and all essential infrastructure. Features excellent road networks, reliable drainage systems, and constant access to utilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Development Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by experienced professionals committed to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {developmentTeam.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.company}</p>
                  <p className="text-xs text-muted-foreground italic">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 max-w-4xl mx-auto border-accent/20">
            <CardContent className="p-8">
              <h3 className="font-bold text-primary mb-3 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-accent" />
                Expertise & Services
              </h3>
              <p className="text-muted-foreground mb-3">
                TRABERG Construction and Development specializes in:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground text-sm">
                <li>• Property acquisition & development</li>
                <li>• Design and build solutions</li>
                <li>• Development appraisal</li>
                <li>• Project monitoring</li>
                <li>• Real estate consultancy</li>
                <li>• Advisory services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Rotary Wheels Court?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Investing with us means joining a community built on trust, quality, and shared values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Ownership */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-luxury">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary ml-4">Lifetime Ownership</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Rotary Wheels Court provides a lifetime opportunity to own beautifully designed, fully serviced properties 
                  strategically located in high-demand areas. This ensures consistent rental income and the potential for long-term 
                  value appreciation.
                </p>
                <p className="text-muted-foreground">
                  Lifetime ownership allows you to diversify your portfolio while eliminating the limitations of leases, ensuring 
                  you retain full control of your asset forever. It's a smart choice for investors seeking stability, profitability, 
                  and enduring value in the competitive property market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join fellow Rotarians to own a property in the first Rotary community!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover the Rotary difference and secure your premium property today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="golden" size="lg" className="text-lg px-8" asChild>
                <Link to="/project">View Properties</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;