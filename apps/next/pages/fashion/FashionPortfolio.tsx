import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const FashionPortfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  
  // Custom colors
  const emerald = "#0f5c3e";
  const ruby = "#9b1b30";
  const sapphire = "#0f3b5c";
  const gold = "#d4af37";
  const ivory = "#fffff0";
  const black = "#000000";
  
  const collections = [
    {
      id: "karakou",
      name: "Karakou Reborn",
      description: "Modern interpretations of the traditional Karakou with structured silhouettes, detachable elements, and fusion with Parisian tailoring.",
      images: [
        "https://images.unsplash.com/photo-1596431366393-4c0e5e318dc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      color: emerald,
      quote: "« L'héritage réinventé pour l'âme moderne »",
      materials: "Silk brocade, velvet, gold thread embroidery"
    },
    {
      id: "desert",
      name: "Desert Sirens",
      description: "Flowy couture gowns inspired by Sahara's mystique, adorned with crystal beadwork and traditional motifs that capture the essence of desert royalty.",
      images: [
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      color: sapphire,
      quote: "« Le désert chante à travers la soie »",
      materials: "Organza, tulle, crystal beadwork"
    },
    {
      id: "resistance",
      name: "Couture Resistance",
      description: "Dark romantic pieces that channel female empowerment, military-inspired cuts softened with traditional embroidery and architectural elements.",
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517754704860-ffd677b8c9a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      color: ruby,
      quote: "« La force dans la délicatesse, la révolution dans la beauté »",
      materials: "Structured leather, embroidered tulle, metallic accents"
    }
  ];
  
  const craftsmanship = [
    {
      id: "embroidery",
      name: "Gold Thread Embroidery",
      description: "Traditional Algerian gold thread embroidery techniques reimagined for contemporary couture.",
      image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "beading",
      name: "Crystal Beadwork",
      description: "Intricate beadwork inspired by the stars over the Sahara, each piece taking over 200 hours to complete.",
      image: "https://images.unsplash.com/photo-1621346653381-f7b2d4b6a1fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tailoring",
      name: "Architectural Tailoring",
      description: "Precision cutting techniques that blend Parisian structure with the flowing forms of traditional Algerian garments.",
      image: "https://images.unsplash.com/photo-1558304970-abd589baebe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Hero Section */}
      <View className="h-screen relative">
        <Image 
          source={{ uri: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }}
          className="absolute w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <View className="items-center px-6">
            <Text style={{ color: ivory, fontSize: 16, letterSpacing: 8, marginBottom: 10 }}>NADIA BELKACEM</Text>
            <Text style={{ color: gold, fontSize: 36, fontWeight: '300', letterSpacing: 2, textAlign: 'center', marginBottom: 20 }}>
              ECHOES OF ELEGANCE
            </Text>
            <Text style={{ color: ivory, fontSize: 18, fontWeight: '300', letterSpacing: 3, textAlign: 'center', marginBottom: 40 }}>
              THE MODERN CLASSIC COUTURE OF AN ALGERIAN SOUL
            </Text>
            <View style={{ height: 1, width: 60, backgroundColor: gold, marginBottom: 40 }} />
            <Text style={{ color: ivory, fontSize: 14, fontStyle: 'italic', textAlign: 'center' }}>
              "A voice from North Africa echoing through the corridors of haute couture"
            </Text>
          </View>
        </View>
      </View>
      
      {/* Navigation */}
      <View className="flex-row justify-around py-6 bg-black border-b border-t border-gray-800">
        {['about', 'collections', 'craftsmanship', 'runway', 'contact'].map(section => (
          <TouchableOpacity 
            key={section} 
            onPress={() => setActiveSection(section)}
            className="px-2"
          >
            <Text style={{ 
              color: activeSection === section ? gold : ivory, 
              fontSize: 14,
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontWeight: activeSection === section ? '500' : '300'
            }}>
              {section}
            </Text>
            {activeSection === section && (
              <View style={{ height: 1, width: '100%', backgroundColor: gold, marginTop: 4 }} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      
      {/* About Section */}
      {activeSection === "about" && (
        <View className="py-16 px-6">
          <View className="flex-row mb-12">
            <View className="flex-1 pr-6">
              <Text style={{ color: gold, fontSize: 24, fontWeight: '300', letterSpacing: 2, marginBottom: 20 }}>
                THE DESIGNER
              </Text>
              <Text style={{ color: ivory, fontSize: 16, lineHeight: 26, marginBottom: 20 }}>
                Born in the heart of Algiers' historic Casbah, Nadia Belkacem's journey in fashion began with her grandmother's treasured Karakou garments. Trained at École de la Chambre Syndicale de la Couture Parisienne, she returned to her roots with a vision to elevate Algerian craftsmanship to the global haute couture stage.
              </Text>
              <Text style={{ color: ivory, fontSize: 16, lineHeight: 26 }}>
                Her philosophy bridges centuries of tradition with avant-garde innovation, creating pieces that honor the past while boldly stepping into the future. Each creation tells a story of cultural pride, feminine strength, and artistic rebellion.
              </Text>
            </View>
            <View className="flex-1">
              <Image 
                source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                style={{ width: '100%', height: 400, borderRadius: 4 }}
                resizeMode="cover"
              />
            </View>
          </View>
          
          <View className="mt-16">
            <Text style={{ color: gold, fontSize: 24, fontWeight: '300', letterSpacing: 2, marginBottom: 20 }}>
              INFLUENCES
            </Text>
            <View className="flex-row flex-wrap">
              <View className="w-1/3 p-2">
                <Image 
                  source={{ uri: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                  style={{ width: '100%', height: 200, borderRadius: 4, marginBottom: 10 }}
                  resizeMode="cover"
                />
                <Text style={{ color: gold, fontSize: 14, marginBottom: 4 }}>JOHN GALLIANO</Text>
                <Text style={{ color: ivory, fontSize: 12 }}>Theatrical storytelling and dramatic silhouettes</Text>
              </View>
              <View className="w-1/3 p-2">
                <Image 
                  source={{ uri: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                  style={{ width: '100%', height: 200, borderRadius: 4, marginBottom: 10 }}
                  resizeMode="cover"
                />
                <Text style={{ color: gold, fontSize: 14, marginBottom: 4 }}>ALEXANDER MCQUEEN</Text>
                <Text style={{ color: ivory, fontSize: 12 }}>Structured rebellion and technical craftsmanship</Text>
              </View>
              <View className="w-1/3 p-2">
                <Image 
                  source={{ uri: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                  style={{ width: '100%', height: 200, borderRadius: 4, marginBottom: 10 }}
                  resizeMode="cover"
                />
                <Text style={{ color: gold, fontSize: 14, marginBottom: 4 }}>ALGERIAN HERITAGE</Text>
                <Text style={{ color: ivory, fontSize: 12 }}>Traditional Karakou and cultural motifs</Text>
              </View>
            </View>
          </View>
        </View>
      )}
      
      {/* Collections Section */}
      {activeSection === "collections" && (
        <View className="py-16">
          {collections.map((collection, index) => (
            <View key={collection.id} className={`mb-20 ${index % 2 === 0 ? '' : 'bg-gray-900'}`}>
              <View className="px-6 py-10">
                <Text style={{ color: collection.color, fontSize: 12, letterSpacing: 3, marginBottom: 6 }}>COLLECTION</Text>
                <Text style={{ color: ivory, fontSize: 28, fontWeight: '300', letterSpacing: 1, marginBottom: 16 }}>
                  {collection.name}
                </Text>
                <Text style={{ color: ivory, fontSize: 16, lineHeight: 26, marginBottom: 20, opacity: 0.8 }}>
                  {collection.description}
                </Text>
                <Text style={{ color: collection.color, fontSize: 16, fontStyle: 'italic', marginBottom: 10 }}>
                  {collection.quote}
                </Text>
                <Text style={{ color: ivory, fontSize: 14, opacity: 0.7 }}>
                  Materials: {collection.materials}
                </Text>
              </View>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-6 mb-10">
                {collection.images.map((image, idx) => (
                  <View key={idx} className="mr-4" style={{ width: 300 }}>
                    <Image 
                      source={{ uri: image }}
                      style={{ width: 300, height: 450, borderRadius: 4 }}
                      resizeMode="cover"
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
        </View>
      )}
      
      {/* Craftsmanship Section */}
      {activeSection === "craftsmanship" && (
        <View className="py-16 px-6">
          <Text style={{ color: gold, fontSize: 24, fontWeight: '300', letterSpacing: 2, marginBottom: 30, textAlign: 'center' }}>
            THE ART OF CRAFTSMANSHIP
          </Text>
          
          {craftsmanship.map((craft, index) => (
            <View key={craft.id} className={`flex-row mb-20 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <View className="flex-1">
                <Image 
                  source={{ uri: craft.image }}
                  style={{ width: '100%', height: 400, borderRadius: 4 }}
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1 px-8 justify-center">
                <Text style={{ color: gold, fontSize: 20, fontWeight: '300', letterSpacing: 1, marginBottom: 16 }}>
                  {craft.name}
                </Text>
                <Text style={{ color: ivory, fontSize: 16, lineHeight: 26 }}>
                  {craft.description}
                </Text>
              </View>
            </View>
          ))}
          
          <View className="mt-10 bg-gray-900 p-8 rounded-lg">
            <Text style={{ color: gold, fontSize: 18, fontWeight: '300', letterSpacing: 1, marginBottom: 16, textAlign: 'center' }}>
              ATELIER PROCESS
            </Text>
            <Text style={{ color: ivory, fontSize: 16, lineHeight: 26, textAlign: 'center', marginBottom: 20 }}>
              Each piece is meticulously crafted in our Algiers atelier, where traditional techniques meet modern innovation. From initial sketch to final stitch, our artisans dedicate hundreds of hours to create wearable art that honors our heritage.
            </Text>
            <View className="flex-row justify-around">
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>DESIGN</Text>
                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: emerald, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: ivory }}>01</Text>
                </View>
              </View>
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>PATTERN</Text>
                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: sapphire, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: ivory }}>02</Text>
                </View>
              </View>
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>FABRIC</Text>
                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: ruby, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: ivory }}>03</Text>
                </View>
              </View>
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>EMBELLISH</Text>
                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: gold, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: black }}>04</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      
      {/* Runway Section */}
      {activeSection === "runway" && (
        <View className="py-16">
          <Text style={{ color: gold, fontSize: 24, fontWeight: '300', letterSpacing: 2, marginBottom: 30, textAlign: 'center' }}>
            RUNWAY & EDITORIAL
          </Text>
          
          <View className="h-screen relative mb-20">
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }}
              className="absolute w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <View className="items-center px-6">
                <Text style={{ color: gold, fontSize: 36, fontWeight: '300', letterSpacing: 2, textAlign: 'center', marginBottom: 20 }}>
                  PARIS FASHION WEEK
                </Text>
                <Text style={{ color: ivory, fontSize: 18, fontWeight: '300', letterSpacing: 3, textAlign: 'center', marginBottom: 40 }}>
                  FALL/WINTER 2023
                </Text>
                <TouchableOpacity 
                  style={{ 
                    paddingVertical: 12,
                    paddingHorizontal: 30,
                    borderWidth: 1,
                    borderColor: gold,
                  }}
                >
                  <Text style={{ color: gold, letterSpacing: 2 }}>VIEW COLLECTION</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <View className="px-6 mb-20">
            <Text style={{ color: ivory, fontSize: 20, fontWeight: '300', letterSpacing: 1, marginBottom: 20, textAlign: 'center', fontStyle: 'italic' }}>
              "Her designs are a revolution in fabric — where Algerian heritage dances with Parisian couture in perfect harmony."
            </Text>
            <Text style={{ color: gold, fontSize: 14, textAlign: 'center' }}>— VOGUE ARABIA</Text>
          </View>
          
          <View className="flex-row flex-wrap">
            {[
              "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((image, idx) => (
              <View key={idx} className="w-1/2 p-1">
                <Image 
                  source={{ uri: image }}
                  style={{ width: '100%', height: 300 }}
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
        </View>
      )}
      
      {/* Contact Section */}
      {activeSection === "contact" && (
        <View className="py-16 px-6">
          <Text style={{ color: gold, fontSize: 24, fontWeight: '300', letterSpacing: 2, marginBottom: 30, textAlign: 'center' }}>
            COLLABORATIONS & INQUIRIES
          </Text>
          
          <View className="bg-gray-900 p-8 rounded-lg mb-16">
            <Text style={{ color: ivory, fontSize: 16, lineHeight: 26, textAlign: 'center', marginBottom: 30 }}>
              For haute couture commissions, runway collaborations, or press inquiries, please contact our atelier. We welcome partnerships with fashion houses, luxury retailers, and cultural institutions that share our vision.
            </Text>
            
            <View className="flex-row justify-around mb-10">
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>ATELIER</Text>
                <Text style={{ color: ivory, textAlign: 'center' }}>16 Rue Didouche Mourad{'\n'}Algiers, Algeria</Text>
              </View>
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>PARIS OFFICE</Text>
                <Text style={{ color: ivory, textAlign: 'center' }}>8 Avenue Montaigne{'\n'}75008 Paris, France</Text>
              </View>
              <View className="items-center">
                <Text style={{ color: gold, fontSize: 14, marginBottom: 6 }}>CONTACT</Text>
                <Text style={{ color: ivory, textAlign: 'center' }}>atelier@nadiabelkacem.com{'\n'}+213 21 63 50 76</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={{ 
                backgroundColor: gold,
                paddingVertical: 16,
                alignItems: 'center',
                marginBottom: 20
              }}
            >
              <Text style={{ color: black, fontWeight: '600', letterSpacing: 2 }}>REQUEST LOOKBOOK</Text>
            </TouchableOpacity>
            
            <View className="items-center">
              <Image 
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" }}
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
              />
              <Text style={{ color: ivory, fontSize: 12, marginTop: 10 }}>Scan for digital portfolio</Text>
            </View>
          </View>
          
          <View className="flex-row justify-center">
            <Text style={{ color: ivory, fontSize: 14, marginRight: 4 }}>English</Text>
            <Text style={{ color: gold, fontSize: 14, marginRight: 4 }}>|</Text>
            <Text style={{ color: ivory, fontSize: 14, marginRight: 4 }}>Français</Text>
            <Text style={{ color: gold, fontSize: 14, marginRight: 4 }}>|</Text>
            <Text style={{ color: ivory, fontSize: 14 }}>العربية</Text>
          </View>
        </View>
      )}
      
      {/* Footer */}
      <View className="py-10 border-t border-gray-800 px-6">
        <Text style={{ color: gold, fontSize: 20, fontWeight: '300', letterSpacing: 2, marginBottom: 16, textAlign: 'center' }}>
          NADIA BELKACEM
        </Text>
        <Text style={{ color: ivory, fontSize: 12, textAlign: 'center', opacity: 0.7 }}>
          © 2023 All Rights Reserved
        </Text>
      </View>
    </ScrollView>
  );
};

export default FashionPortfolio;