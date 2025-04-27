import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const FashionShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Gowns', 'Suits', 'Accessories', 'Collections']
  
  const products = [
    {
      id: 1,
      name: 'Embellished Evening Gown',
      price: 4950,
      designer: 'Valentino',
      image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Gowns',
      isNew: true,
    },
    {
      id: 2,
      name: 'Tailored Wool Tuxedo',
      price: 5200,
      designer: 'Tom Ford',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Suits',
      isNew: false,
    },
    {
      id: 3,
      name: 'Silk Chiffon Couture Dress',
      price: 8900,
      designer: 'Dior',
      image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Gowns',
      isNew: true,
    },
    {
      id: 4,
      name: 'Bespoke Cashmere Suit',
      price: 7500,
      designer: 'Brioni',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Suits',
      isNew: false,
    },
    {
      id: 5,
      name: 'Limited Edition Clutch',
      price: 3200,
      designer: 'Chanel',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Accessories',
      isNew: true,
    },
    {
      id: 6,
      name: 'Avant-Garde Ensemble',
      price: 12500,
      designer: 'Alexander McQueen',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Collections',
      isNew: true,
    }
  ]
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // Custom colors
  const darkGreen = "#132622"
  const beige = "#c4ae9b"

  return (
    <View style={{ flex: 1, backgroundColor: darkGreen }}>
      {/* Header */}
      <View className="pt-14 pb-6 px-5">
        <Text style={{ color: beige, fontSize: 32, fontWeight: '300', letterSpacing: 3 }}>HAUTE COUTURE</Text>
        <Text style={{ color: beige, opacity: 0.7, letterSpacing: 1, marginTop: 4 }}>Exceptional craftsmanship</Text>
      </View>
      
      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="py-4"
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {categories.map(category => (
          <TouchableOpacity 
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={{ 
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 6,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: beige,
              backgroundColor: selectedCategory === category ? beige : 'transparent'
            }}
          >
            <Text 
              style={{ 
                color: selectedCategory === category ? darkGreen : beige,
                fontWeight: '500',
                letterSpacing: 1
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Products Grid */}
      <ScrollView 
        className="flex-1 px-3 pt-6"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-row flex-wrap justify-between">
          {filteredProducts.map(product => (
            <TouchableOpacity 
              key={product.id} 
              style={{ 
                width: '48%', 
                marginBottom: 24,
                backgroundColor: 'rgba(196, 174, 155, 0.1)',
                borderRadius: 12,
                overflow: 'hidden'
              }}
            >
              <View className="relative">
                <Image 
                  source={{ uri: product.image }} 
                  style={{ width: '100%', height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                  resizeMode="cover"
                />
                {product.isNew && (
                  <View style={{ 
                    position: 'absolute', 
                    top: 12, 
                    left: 12, 
                    backgroundColor: beige, 
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 4
                  }}>
                    <Text style={{ color: darkGreen, fontSize: 10, fontWeight: '600' }}>NEW ARRIVAL</Text>
                  </View>
                )}
              </View>
              <View style={{ padding: 12 }}>
                <Text style={{ color: beige, fontSize: 12, marginBottom: 2, fontWeight: '500' }}>
                  {product.designer}
                </Text>
                <Text style={{ color: beige, fontWeight: '600', fontSize: 14 }} numberOfLines={1}>
                  {product.name}
                </Text>
                <Text style={{ color: beige, fontWeight: '700', marginTop: 6, fontSize: 16 }}>
                  €{product.price.toLocaleString()}
                </Text>
                <TouchableOpacity 
                  style={{ 
                    marginTop: 12,
                    backgroundColor: beige,
                    paddingVertical: 8,
                    borderRadius: 6,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: darkGreen, fontWeight: '600', fontSize: 12 }}>
                    Request Details
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingVertical: 16,
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(196, 174, 155, 0.3)'
      }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: beige, fontWeight: '500' }}>Atelier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: beige, opacity: 0.6 }}>Collections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: beige, opacity: 0.6 }}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: beige, opacity: 0.6 }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FashionShop;