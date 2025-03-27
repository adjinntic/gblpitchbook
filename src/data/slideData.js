// Slide content structure for Goldbar Pitch Deck

// Import images for testimonials (Slide 14)
import MahomesImage from '../assets/images/img1_Mahomes1.jpg';
import InfluencerImage from '../assets/images/img4_STLFashion2.jpg'; // Placeholder
import CustomerImage from '../assets/images/img12_Product1.jpg'; // Placeholder
import DefaultHeroImage from '../assets/images/img6_MahomesAndQ.jpg'; // Default for Slide 14

// Import image for closing slide visual (Slide 24)
import ClosingVisualImage from '../assets/images/KCWideHTNde.jpg';

// Import images for other slides
import CoverImage from '../assets/images/AmbitionProductWideBrighter.jpg';
import QImage from '../assets/images/img16_pQtheDesigner.jpg';
import CollabsImage from '../assets/images/img11_Celbreties.jpg';
import KcOppImage from '../assets/images/RedKingdomwSquareish.jpg';
import ProductImage from '../assets/images/img15_Product3.jpg';
import SolutionImage from '../assets/images/img14_product2.jpg';
import VisionImage from '../assets/images/HTWideNde.jpg';


const slideData = [
  // === OPENING SECTION ===
  {
    id: "cover",
    slideNumber: "01",
    category: "OPENING",
    layoutType: 'TYPE_TWO_COLUMN_OVERLAP', // Added layout type
    title: "Goldbar Limited: Luxury Apparel Investment Opportunity",
    // introText removed, moved to leftColumn paragraphs
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      // Restructured from fullWidth to two columns
      leftColumn: {
        flex: 1.2, // Give text slightly more space
        paragraphs: [
          "Goldbar Limited is an exclusive luxury streetwear brand designed for high-fashion millennials, luxury connoisseurs, and sports enthusiasts who demand to be seen and remembered. Created by celebrity designer Q, each piece fuses formfitted silhouettes, culturally inspired varsity jackets, and innovative color waves—creating an undeniable presence.<br/><br/>Our commitment to sustainability, premium materials, and limited-edition collections ensures that every release is as rare as it is remarkable.<br/><br/>This isn't just apparel—it's an elevation lifestyle. <strong>Stand out. Stay exclusive. Own the moment.</strong>"
        ]
      },
      rightColumn: {
        flex: 0.8, // Give visual slightly less space
        visual: {
          height: "350px", // Adjusted height for visual
          // placeholder: "[Goldbar Limited Logo / Hero Image Placeholder]"
          imageSrc: CoverImage
        }
      }
    }
  },
  {
    id: "exec-summary",
    slideNumber: "02",
    category: "OPENING",
    layoutType: 'TYPE_DEFAULT', // Explicitly set default
    title: "Executive Summary",
    introText: "Gold Bar Limited is a rapidly growing luxury streetwear brand merging urban sports culture with high-end fashion. Founded by celebrity designer Q, we create exclusive, limited-edition apparel generating significant buzz and demand, particularly in sports-centric markets like Kansas City.",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        highlightBoxes: [
          {
            title: "Investment Ask",
            text: "Seeking <strong>$50K - $100K</strong> to scale production, enhance marketing, and expand our retail footprint in the MidWest, capitalizing on established momentum."
          }
        ]
      },
      rightColumn: {
        flex: 1,
        highlightBoxes: [
          {
            title: "Opportunity Snapshot",
            items: [
              "Proven Demand: Sold-out drops, strong waitlists.",
              "High Margins: ~55%+ gross profit.",
              "Target ROI: <strong>3x within 2 years</strong>.",
              "Projected Revenue: $132M by Year 5.",
              "Growth Potential: Licensing deals (e.g., NFL)."
            ]
          }
        ]
      },
      bottomText: "We invite partners to join us in dominating the luxury sportswear market and owning the moment."
    }
  },
  {
    id: "meet-q",
    slideNumber: "03",
    category: "OPENING",
    layoutType: 'TYPE_TWO_COLUMN_OVERLAP', // Changed layout type
    title: "Meet Kyle Q: The Visionary",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1.2,
        paragraphs: [
          "Q's journey began in 2004, experimenting with materials in his grandparents' basement. He built 'The Only Lifestyle Brand' from scratch, establishing fashion bases in local malls before strategically moving to Atlanta.",
          "His talent for blending street aesthetics with luxury led to styling and creating custom pieces for icons like <strong>Snoop Dogg, Jamie Foxx, Nipsey Hussle, Cedric The Entertainer, Patrick Mahomes</strong>, and many more."
        ]
      },
      rightColumn: {
        flex: 0.8,
        visual: {
          height: "280px",
          // placeholder: "[Photo of Kyle Q]"
          imageSrc: QImage
        },
        paragraphs: [
          "Q is a cultural prototypist, using fashion, art, and entertainment to curate unique experiences. His vision for Gold Bar Limited leverages this deep industry connection and design expertise to target lucrative niches, like the intersection of sports and luxury fashion, with an ultimate goal of securing major licensing deals."
        ]
      }
    }
  },
  {
    id: "collabs",
    slideNumber: "04",
    category: "OPENING",
    title: "High-Profile Collaborations & Partnerships",
    introText: "Our ability to create custom, high-impact pieces for elite athletes, entertainers, and cultural icons drives brand visibility and validates our luxury positioning.",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        highlightBoxes: [
          {
            title: "Featured Collaborations & Events",
            items: [
              "<strong>Athletes:</strong> Patrick Mahomes, Jason Tatum",
              "<strong>Entertainers:</strong> Snoop Dogg, Cedric The Entertainer, Jamie Foxx",
              "<strong>Cultural Icons:</strong> Nipsey Hussle (custom album release jacket)",
              "<strong>Events:</strong> Super Bowl activations, All-Star weekends, KC & STL Fashion Weeks, Red Carpets"
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        visual: {
          height: "350px",
          // placeholder: "[Collage of Celebrity Photos / Event Logos]"
          imageSrc: CollabsImage
        }
      }
    }
  },
  // === MARKET & OPPORTUNITY SECTION ===
  {
    id: "market-opp",
    slideNumber: "05",
    category: "MARKET",
    layoutType: 'TYPE_STAT_FOCUS', // Added layout type
    title: "Market Opportunity: Street Luxury",
    stat: "$185B+",
    statDescription: "Global luxury streetwear market size, projected to grow at <strong>~6.5% CAGR</strong>.",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        highlightBoxes: [
          {
            title: "Target Demographic Drivers",
            items: [
              "Gen Z & Millennials ($75K+ income) demanding authenticity and exclusivity.",
              "High-fashion consumers seeking unique cultural connections.",
              "Sports enthusiasts wanting elevated, non-traditional fan gear.",
              "Growing demand for sustainable luxury goods."
            ]
          },
          {
            title: "Geographic Focus",
            items: [
              "<strong>Primary:</strong> MidWest (Kansas City flagship).",
              "<strong>Secondary:</strong> Other US sports-centric markets.",
              "<strong>Future:</strong> International luxury hubs (via partnerships/online)."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
         highlightBoxes: [
          {
            title: "Target Audience Profile",
            items: [
              "<strong>Age:</strong> 22-45 (Millennials & older Gen Z)",
              "<strong>Income:</strong> $75K+ (Affluent & Aspirational)",
              "<strong>Location:</strong> Urban / Suburban, culturally connected",
              "<strong>Values:</strong> Exclusivity, quality, brand storytelling, individuality, status.",
              "<strong>Behavior:</strong> Culturally aware, follows trends (fashion, sports, music), active on social media, influences peers."
            ]
          }
        ]
      },
      bottomText: "They demand to be seen and remembered, and Gold Bar provides the statement pieces to achieve that."
    }
  },
  {
    id: "kc-opp",
    slideNumber: "06",
    category: "MARKET",
    title: "The Kansas City Opportunity",
    introText: "The Kansas City market represents a unique confluence of sports fervor, cultural momentum, and unmet demand for elevated fan apparel.",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "The Problem We Solve",
            text: "Traditional sportswear is often generic. Fans, especially younger, style-conscious demographics, crave unique, high-quality ways to express their loyalty that align with a luxury lifestyle."
          },
          {
            title: "Operational Challenges (Past Obstacles)",
            items: [
              "Insufficient inventory during peak demand (e.g., NFL playoffs).",
              "Delayed production cycles missing key sales windows.",
              "Limited funding for targeted marketing during high-momentum periods.",
              "Scaling physical presence (Pop-ups, consignment) requires capital.",
              "<strong>Investment directly addresses these bottlenecks.</strong>"
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
           {
            title: "Market Demand",
            text: "We've established a significant footprint and strong relationships in KC over two years, proving demand for our \"Street Luxury\" approach during the Chiefs' dominant era."
          }
        ],
        visual: {
          height: "250px",
          // placeholder: "[Kansas City Skyline / Chiefs Imagery]"
          imageSrc: KcOppImage
        }
      }
    }
  },
  {
    id: "comp-advantage",
    slideNumber: "07",
    category: "MARKET",
    title: "Competitive Advantage",
    introText: "While the luxury streetwear space includes brands like Off-White, Heron Preston, and A-Cold-Wall*, Gold Bar Limited differentiates itself through a unique blend of advantages:",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      // Using highlight boxes for each advantage
      fullWidth: { // Or could be two columns
         highlightBoxes: [
           { title: "Founder-Led Design & Vision", text: "Direct creative output from Q, a recognized industry figure with deep connections and a distinct \"Street Luxury\" aesthetic." },
           { title: "Authentic Sports/Culture Integration", text: "Genuine roots and collaborations within sports and entertainment (esp. KC market) provide credibility competitors lack." },
           { title: "Hyper-Exclusivity Model", text: "Focus on truly limited drops (incl. 1-of-1s) creates intense demand, justifies premium pricing, and fuels resale value." },
           { title: "Proven Regional Traction", text: "Demonstrated success and brand loyalty within the target MidWest/KC market provides a strong foundation for growth." }
         ]
      }
    }
  },
  // === PRODUCT & BUSINESS MODEL SECTION ===
  {
    id: "positioning",
    slideNumber: "08",
    category: "PRODUCT",
    title: "Brand Positioning & Value Proposition",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
       // Using highlight boxes for each pillar
       fullWidth: { // Could also be columns
         highlightBoxes: [
           { title: "Exclusivity", text: "Every release is limited, from <strong>one-of-one masterpieces</strong> to small-batch (e.g., one-of-a-hundred) statement pieces, ensuring scarcity and high demand." },
           { title: "Premium Quality", text: "Meticulously crafted using sustainable, premium materials that justify luxury pricing and create lasting value. Focus on <strong>formfitted silhouettes</strong> and innovative details." },
           { title: "Cultural Relevance", text: "Designs rooted in authentic street/sports culture, elevated to high fashion. Pieces that spark conversations, turn heads (even on \"Megatrons\"), and cement the wearer's status as a style icon." }
         ]
       }
    }
  },
  {
    id: "product",
    slideNumber: "09",
    category: "PRODUCT",
    title: "Product: The Art of Street Luxury",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Flagship Limited-Editions",
            text: "Culturally inspired varsity jackets and premium sportswear featuring:",
            items: [
              "Form-fitting silhouettes",
              "Innovative color waves & patterns (e.g., Houndstooth)",
              "Premium, often sustainable, materials",
              "Intricate embroidery and handcrafted details",
              "High-visibility branding blended with artistic design"
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,        
        visual: {      
          height: "350px",
          imageSrc: ProductImage
        }
      }
    }
  },
  {
    id: "business-model",
    slideNumber: "10",
    category: "PRODUCT",
    title: "Business Model & Revenue Streams",
    introText: "Business Model: Exclusivity & Engagement",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Primary Revenue Streams",
            items: [
              "Direct-to-Consumer (DTC) Sales: Limited-edition drops via website & pop-ups.",
              "Membership Subscription ($9.99/mo): Recurring revenue, early access, discounts (Target: 1k-6k+ members).",
              "Bespoke/Custom Orders: High-margin pieces for VIP clients/celebrities.",
              "Potential Licensing: Future revenue from brand partnerships (e.g., NFL)."
            ]
          }
        ],
        paragraphs: [
          "<strong>Strong Profitability:</strong> ~55%+ gross margin driven by premium pricing and controlled production."
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Revenue Breakdown",
            items: [
              "Limited-Edition Sportswear (40%): Core driver, high retail margins.",
              "Other Collections (45%): Seasonal drops, collaborations.",
              "Custom Varsity Jackets (5%): High visibility via wholesale/VIP.",
              "Accessories & Other (10%): Complementary items."
            ]
          }
        ],
        //visual: {
          //height: "250px",
          //placeholder: "[Pie Chart: Revenue Breakdown]"
        //}
      }
    }
  },
  {
    id: "membership",
    slideNumber: "11",
    category: "PRODUCT",
    title: "GOLDBAR Membership: The Inner Circle",
    introText: "<strong>Unlock Exclusive Access</strong><br/>The GOLDBAR Membership ($9.99/Month) builds a loyal community and predictable revenue stream.",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Member Benefits",
            items: [
              "High-quality metal GOLDBAR Card with unique access number.",
              "Early access to limited drops (via exclusive platform/Discord).",
              "Significant discounts (e.g., 30% OFF collections).",
              "VIP Event Upgrades & Member-Only Experiences.",
              "Sense of belonging and exclusivity."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        paragraphs: [
          "<strong>Target: 1K → 3K → 6K+ Members</strong>",
          "Potential: $10K → $30K → $60K+ Monthly Recurring Revenue",
          "This program fosters loyalty, provides valuable customer data, and helps manage demand for drops."
        ],
        //visual: {
          //height: "200px",
          //placeholder: "[Mockup of Metal Membership Card]"
        //}
      }
    }
  },
  {
    id: "solution",
    slideNumber: "12",
    category: "PRODUCT",
    title: "Solution: Scaling For Success",
    introText: "Gold Bar Limited provides exclusive, high-quality streetwear that allows fans to showcase team pride through a lens of luxury and individuality. Investment enables us to meet existing demand and proactively capture future opportunities.",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Core Product Focus",
            text: "Limited-edition, culturally inspired varsity jackets and premium sportswear featuring innovative designs (e.g., Houndstooth) and materials."
          }
        ],
         visual: { // Added visual for product focus
          height: "200px",
          // placeholder: "[Image: Core Product Example]"
          imageSrc: SolutionImage
        }
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Key Strategies (Enabled by Investment)",
            items: [
              "<strong>Inventory Scaling:</strong> Pre-order sufficient stock for peak season.",
              "<strong>Pop-Up Expansion:</strong> Increase frequency/reach in high-traffic KC locations.",
              "<strong>Targeted Marketing:</strong> Digital ads & influencer campaigns during key moments.",
              "<strong>Membership Program:</strong> Drive pre-orders, loyalty, and recurring revenue.",
              "<strong>Sales Team Support:</strong> Enable commission-based team expansion."
            ]
          }
        ]
      }
    }
  },
  // === TRACTION & GROWTH SECTION ===
  {
    id: "traction",
    slideNumber: "13",
    category: "TRACTION",
    title: "Traction & Market Validation",
    introText: "Demonstrated demand and exceptional market traction validating Goldbar model.",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        highlightBoxes: [
          {
            title: "Key Traction Metrics",
            items: [
              "<strong>Consistently Sold-Out Drops:</strong> 48% sell out within 48 hours.",
              "<strong>Strong Waitlist Demand:</strong> 2,000+ customers per drop.",
              "<strong>High Resale Market Value:</strong> Items reselling at 2-3x retail (e.g., 1-of-1 Nipsey piece resold for $10K)."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Key Achievements",
            items: [
              "Successful NFL Draft Fashion Show collab with NFL Alumni.",
              "600+ units sold over prior two seasons (limited inventory).",
              "Super Bowl Pop-Up (Vegas 2024): Sold out in 45 mins.",
              "Revenue Growth: Y1 $900K → Y2 $1.8M+.",
              "Media Features: ESPN, KC Star, etc.",
              "38K+ engaged Instagram followers."
            ]
          }
        ]
      },
       bottomText: "<strong>2025 Goal:</strong> Triple sales volume (1,800+ units) with investment."
    }
  },
  {
    id: "testimonials",
    slideNumber: "14",
    category: "TRACTION",
    layoutType: 'TYPE_TESTIMONIAL_HERO', // Changed layout type
    title: "Customer Testimonials & Endorsements",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      defaultHeroImage: DefaultHeroImage, // Added default hero image
      testimonialBoxes: [ // Renamed from highlightBoxes and added associatedImage
        {
          title: "Patrick Mahomes (NFL MVP)",
          text: "\"It's always great to support our community... custom jackets like these, made by Goldbar Limited, really connects us to the spirit of both the Chiefs and the Current.\"",
          associatedImage: MahomesImage
        },
        {
          title: "Luxury Streetwear Influencer",
          text: "\"Goldbar brings something fresh to high-end sportswear. The quality is unreal, and the designs stand out at every event I wear them to.\"",
          associatedImage: InfluencerImage
        },
        {
          title: "Verified Customer",
          text: "\"Worth every penny. I've never had so many people ask where I got my jacket. It's luxury, it's exclusive, and it makes me feel like a star.\"",
          associatedImage: CustomerImage
        }
      ]
      // Removed fullWidth wrapper
    }
  },
  {
    id: "marketing-sales",
    slideNumber: "15",
    category: "TRACTION",
    title: "Marketing & Sales Strategy: Hype & Access",
    introText: "Our strategy combines digital reach with high-touch physical experiences, focusing on scarcity and community.",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Core Channels",
            items: [
              "<strong>Digital Marketing:</strong> Targeted ads (Social, Search), influencer collaborations, high-quality visual content.",
              "<strong>Pop-Up Shops:</strong> Experiential retail in strategic locations during peak events (e.g., KC game days - target 3 venues/game). Proven high sell-through rates.",
              "<strong>Social Media:</strong> Organic growth (38K+ Insta), viral potential, community engagement (Discord).",
              "<strong>PR & Media:</strong> Leveraging founder/celebrity connections for features (ESPN, Forbes etc.).",
              "<strong>Membership Platform:</strong> Direct communication channel for drops/events."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Sales Execution",
            text: "Driven by DTC online sales and a <strong>9-member commission-based sales team</strong> managing pop-ups and potentially consignment/retail partnerships."
          }
        ],
        highlightBoxes: [
           {
             title: "Near-Term Goal (6 mo)",
             text: "Sell 1,500 units @ $250-$300 = <strong>~$249K Gross Sales</strong>."
           }
        ]
      }
    }
  },
  {
    id: "growth-drivers",
    slideNumber: "16",
    category: "TRACTION",
    title: "Key Growth Drivers",
    introText: "Leveraging our foundation for significant expansion across multiple vectors.",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      fullWidth: { // Using highlight boxes for drivers
        highlightBoxes: [
          { title: "Global Market Expansion", text: "Strategic entry into international luxury markets & MLS partnerships to increase brand reach." },
          { title: "High-Profile Collaborations", text: "Continued partnerships with celebrities & athletes for limited drops generating buzz & exclusivity." },
          { title: "Enhanced Marketing", text: "Increased investment in celebrity endorsements & digital presence to amplify awareness." },
          { title: "Retail Expansion", text: "Strategic partnerships (Pro sports teams) & potential flagship stores for immersive experiences." },
          { title: "Product Line Expansion", text: "Developing new categories (accessories, etc.) while maintaining exclusivity." }
        ]
      }
    }
  },
  // === FINANCIAL & INVESTMENT SECTION ===
  {
    id: "financials",
    slideNumber: "17",
    category: "FINANCIAL",
    title: "Financial Performance & Cost Structure",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Financial Performance & Projections",
            items: [
              "<strong>Year 1:</strong> $900K Revenue / $480K Net Profit (55% Margin)",
              "<strong>Year 3:</strong> $22M Revenue / $11.5M Net Profit",
              "<strong>Year 5:</strong> $132M Revenue / $70M Net Profit"
            ],
            text: "Positioned for rapid growth (<strong>CAGR >170%</strong>) driven by market expansion, collaborations, limited drops, and enhanced marketing.<br/>Strong <strong>profit margin of 55%+</strong> ensures sustainability and reinvestment potential, while the scarcity model maintains demand and <strong>premium pricing power.</strong>"
          }
        ],
         //visual: { // Added visual for projections
          //height: "200px",
          //placeholder: "[Bar Chart: Revenue Projections Y1-Y5]"
        }
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Cost Structure Breakdown (Operational)",
            items: [
              "Manufacturing (35%): Custom designs, premium/sustainable fabrics, quality production.",
              "Marketing & Branding (25%): Digital ads, influencers, visuals, PR, events.",
              "Operations (20%): Logistics, staffing, e-commerce, customer service.",
              "R&D & Contingency (20%): Design innovation, material sourcing, flexibility."
            ]
          }
        ],
        //visual: {
          //height: "200px",
          //placeholder: "[Pie Chart: Cost Structure Breakdown]"
        //}
      //}
    }
  },
  {
    id: "investment-opp",
    slideNumber: "18",
    category: "FINANCIAL",
    title: "Investment Opportunity & Allocation",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Investment Opportunity",
            text: "<strong>$50K - $100K Seek</strong><br/>To fuel targeted expansion and capitalize on proven market demand."
          },
          {
            title: "Immediate Goal (with Investment)",
            text: "Generate <strong>~$249,000 in gross sales</strong> over the next 6-month season (1,500 units)."
          },
          {
            title: "Projected Investor Return",
            text: "Target: <strong>3x ROI within 2 years</strong> on $100K investment.<br/>(Short-term: Potential for 75-175% return profile based on initial 6-12 month performance driven by the $249k sales goal)."
          }
        ],
        paragraphs: [
          "This investment directly enables inventory scaling, marketing boosts, and pop-up expansion needed to hit near-term targets and unlock long-term growth."
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "$100K Investment Allocation",
            items: [
              "Manufacturing & Production (40%): Secure materials, sustainable sourcing, increase inventory.",
              "Marketing & Branding (30%): Power social campaigns, influencers, pop-up promotion, digital ads.",
              "Operations & Logistics (20%): Optimize supply chain, support sales team, enhance e-commerce.",
              "Contingency & R&D (10%): Buffer for costs, explore new designs/materials."
            ]
          }
        ],
        paragraphs: [
          "Strategic allocation designed to drive brand visibility, operational efficiency, and achieve the targeted <strong>3x ROI within two years.</strong>"
        ],
         //visual: { // Added visual for allocation
          //height: "200px",
          //placeholder: "[Pie Chart: Investment Allocation]"
        //}
      }
    }
  },
  {
    id: "roi-exit",
    slideNumber: "19",
    category: "FINANCIAL",
    title: "Return on Investment & Exit Strategy",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Projected Returns",
            items: [
              "Investment: $50K-$100K.",
              "Target ROI: <strong>3x within 2 years.</strong>",
              "Driven by ~55%+ profit margins and strong revenue growth (Projected $22M by Y3).",
              "Short-term ROI potential based on initial 6-month sales performance."
            ]
          },
           {
            title: "Long-Term Value Drivers",
            items: [
              "Securing major sports licensing deals (NFL, etc.).",
              "Building significant brand equity in the luxury market.",
              "Recurring revenue from growing membership base.",
              "Establishing global market presence."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Potential Exit Strategies",
            items: [
              "Strategic Acquisition by larger fashion house or apparel group.",
              "Licensing deal with major manufacturer leading to buy-out.",
              "Private Equity investment at significantly higher valuation.",
              "Profit Sharing / Dividends based on sustained profitability."
            ]
          }
        ]
      }
    }
  },
  {
    id: "risk",
    slideNumber: "20",
    category: "FINANCIAL",
    title: "Risk Mitigation",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Potential Risks",
            items: [
              "Demand Fluctuation (Seasonality, Team Performance).",
              "Supply Chain Vulnerability.",
              "Increased Competition.",
              "Execution Risk (Scaling Ops)."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Mitigation Strategies",
            items: [
              "<strong>Diversification:</strong> Membership revenue smooths seasonality; expanding beyond one team/sport.",
              "<strong>Supply Chain:</strong> Building relationships with multiple suppliers; buffer inventory.",
              "<strong>Competition:</strong> Focus on unique design, founder story, exclusivity, authentic connections.",
              "<strong>Execution:</strong> Experienced founder, strategic fund allocation, phased rollout, commission-based sales model, 10% contingency fund."
            ]
          }
        ]
      }
    }
  },
  // === IMPLEMENTATION & VISION SECTION ===
  {
    id: "team",
    slideNumber: "21",
    category: "IMPLEMENTATION",
    title: "Leadership & Team",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Kyle Q - Founder & Creative Director",
            text: "20+ years in fashion, proven visionary, extensive network (Snoop, Mahomes, Foxx, etc.). Driving force behind brand aesthetic and partnerships."
          }
        ],
        visual: {
          height: "200px",
          // placeholder: "[Photo of Kyle Q]"
          imageSrc: QImage
        }
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Core Team (Structure)",
            items: [
              "Head of Operations (Overseeing Production, Logistics)",
              "Marketing Lead (Digital, Branding, Events)",
              "Sales Lead (Managing Pop-ups, Commission Team)"
            ]
          },
          {
            title: "Extended Network",
            items: [
              "<strong>9-Member Commission Sales Force:</strong> Scalable ground team.",
              "Established Manufacturing Partners.",
              "Network of Stylists, Influencers, and Media Contacts."
            ]
          }
        ],
        paragraphs: [
          "Led by an experienced founder with deep industry credibility and supported by a focused operational structure."
        ]
      }
    }
  },
  {
    id: "timeline",
    slideNumber: "22",
    category: "IMPLEMENTATION",
    title: "Implementation Timeline (Post-Investment)",
    introText: "Targeting immediate impact for the upcoming season (Assume investment closes ~June/July)",
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      fullWidth: { // Using highlight boxes for phases
        highlightBoxes: [
          {
            title: "Phase 1: Ramp Up (Q3)",
            items: [
              "Place bulk inventory orders (Utilize Mfg funds).",
              "Finalize pop-up logistics & contracts.",
              "Onboard/train expanded sales team.",
              "Launch pre-season marketing campaigns (Utilize Mktg funds).",
              "Enhance membership platform/drive."
            ]
          },
          {
            title: "Phase 2: Peak Season Execution (Q4)",
            items: [
              "Full-scale pop-up operations during season.",
              "Intensified digital marketing & event activations.",
              "Inventory management & fulfillment.",
              "Ongoing PR & influencer engagement."
            ]
          },
          {
            title: "Phase 3: Evaluate & Plan (Q1 Next Year)",
            items: [
              "Analyze sales data & campaign ROI.",
              "Report to investors (Targeting initial return metrics).",
              "Refine strategy for next season/growth phase.",
              "Explore initial steps for broader expansion (new markets/products)."
            ]
          }
        ]
      }
    }
  },
  {
    id: "vision",
    slideNumber: "23",
    category: "IMPLEMENTATION",
    title: "Vision: Dominating Luxury Sportswear",
    introText: "Gold Bar Limited aims to be the defining brand at the intersection of sports culture and luxury fashion, expanding from our strong KC base to become a globally recognized name.",
    backgroundEffects: { glow1: true, glow2: false },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          {
            title: "Long-Term Objectives",
            items: [
              "<strong>Secure Major Licensing Deals:</strong> Kansas City Chiefs, NFL, potentially other leagues (MLS, NBA) or teams.",
              "<strong>Global Expansion:</strong> Establish presence in key international luxury markets.",
              "<strong>Product Diversification:</strong> Expand into footwear, accessories, and potentially womenswear.",
              "<strong>Build Enduring Brand Equity:</strong> Become synonymous with exclusive, culturally relevant luxury sportswear."
            ]
          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Innovation Focus",
            items: [
              "Sustainable luxury materials and practices.",
              "Tech integration (e.g., NFC tags for authenticity).",
              "Immersive retail experiences (Digital + Physical)."
            ]
          }
        ],
         visual: { // Added visual for vision
          height: "200px",
          // placeholder: "[Image representing Global Expansion / Future Products]"
          imageSrc: VisionImage
        }
      }
    }
  },
  // === CLOSING SECTION ===
  {
    id: "closing",
    slideNumber: "24",
    category: "CLOSING",
    layoutType: 'TYPE_TWO_COLUMN_OVERLAP', // Ensure default layout
    title: "Investment Summary, CTA & Contact",
    // introText removed as per plan
    backgroundEffects: { glow1: false, glow2: true },
    content: {
      leftColumn: {
        flex: 1,
        sections: [
          // "The Opportunity" section removed
          // "Join the GOLDBAR Movement" section removed
          {
            title: "Next Steps", // Kept Next Steps
            items: [
              "Detailed Financial Review",
              "Product Showcase & Q&A with Q",
              "Discuss Partnership Structure"
            ]

          }
        ]
      },
      rightColumn: {
        flex: 1,
        sections: [
          {
            title: "Get in Touch", // Kept Get in Touch
            text: "<strong>Kyle Q</strong><br/>Founder & Creative Director<br/><br/><strong>Address:</strong> 3455 Peachtree Road NE Suite 500 Atlanta, Georgia 30326<br/><strong>Phone:</strong> (678) 909-1632<br/><strong>Email:</strong> info@goldbarlimited.com<br/><strong>Website:</strong> goldbarlimited.com"
          }
        ],
        // paragraphs removed
        visual: { // Added visual placeholder
          height: "250px",
          imageSrc: ClosingVisualImage
          //placeholder: "[Goldbar Brand Image / KC Visual]"
        }
      }
    }
  }
];

export default slideData;
