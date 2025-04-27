import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Modal,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system'

// Get screen dimensions for the preview
const { width: screenWidth } = Dimensions.get('window')

// Define the type for individual feeling items
interface FeelingItem {
  id: number
  feeling: string
  description: string
  imageUrl?: string // Optional image URL for each feeling
}

// Define props interface for the component
interface DownloadPdfProps {
  data: {
    horse_rider_feelings: FeelingItem[]
  }
  title?: string
  coverImageUrl?: string
}

// Map feelings to default images if no custom image is provided
const defaultImageMap: Record<string, string> = {
  Trust:
    'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=600&auto=format',
  Fear: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&auto=format',
  Excitement:
    'https://images.unsplash.com/photo-1568376794599-ae325fcdb72f?w=600&auto=format',
  Love: 'https://images.unsplash.com/photo-1553284966-19b8815c7817?w=600&auto=format',
  Confidence:
    'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?w=600&auto=format',
  Anxiety:
    'https://images.unsplash.com/photo-1553284978-7da3f2846275?w=600&auto=format',
  Joy: 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=600&auto=format',
  Calm: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&auto=format',
  // Default image for any feeling not in the map
  default:
    'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=600&auto=format',
}

const DownloadPdf: React.FC<DownloadPdfProps> = ({
  data,
  title = 'Horse Rider Feelings',
  coverImageUrl = 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1200&auto=format', // Default cover image
}) => {
  const [loading, setLoading] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)

  // Function to generate HTML content for the PDF
  const generateHtml = () => {
    const feelings = data.horse_rider_feelings

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap');
            
            body {
              font-family: 'Roboto', Helvetica, Arial, sans-serif;
              padding: 0;
              margin: 0;
              color: #333;
              background-color: #fff;
            }
            
            .content {
              padding: 40px;
            }
            
            /* Cover section */
            .cover-section {
              margin-bottom: 60px;
              position: relative;
              page-break-after: always;
              text-align: center;
            }
            
            .cover-image-container {
              margin-bottom: 30px;
            }
            
            .cover-image {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            }
            
            .cover-title {
              font-family: 'Playfair Display', serif;
              font-size: 42px;
              color: #111;
              margin-bottom: 20px;
            }
            
            .cover-subtitle {
              font-size: 18px;
              font-weight: 300;
              color: #444;
              max-width: 600px;
              margin: 0 auto;
            }
            
            h1 {
              font-family: 'Playfair Display', serif;
              text-align: center;
              color: #111;
              margin: 40px 0;
              font-size: 32px;
              padding-bottom: 10px;
              border-bottom: 1px solid #d5d5d5;
            }
            
            /* Item styling - now without overlays */
            .item {
              margin-bottom: 60px;
              page-break-inside: avoid;
            }
            
            .item-header {
              margin-bottom: 20px;
              text-align: center;
            }
            
            .item-image {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            }
            
            .item-title {
              color: #111;
              font-size: 28px;
              font-family: 'Playfair Display', serif;
              margin: 16px 0;
              text-align: center;
            }
            
            .item-content {
              padding: 0;
            }
            
            .description {
              font-size: 16px;
              line-height: 1.7;
              color: #333;
              margin-bottom: 10px;
            }
            
            .page-number {
              text-align: center;
              margin-top: 25px;
              color: #777;
              font-size: 12px;
              font-style: italic;
              padding-top: 15px;
              border-top: 1px solid #e0e0e0;
            }
            
            .footer {
              text-align: center;
              padding: 30px 0;
              margin-top: 60px;
              border-top: 1px solid #d5d5d5;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="content">
            <div class="cover-section">
              <div class="cover-image-container">
                <img class="cover-image" src="${coverImageUrl}" alt="Cover">
              </div>
              <div class="cover-title">${title}</div>
              <div class="cover-subtitle">A collection of emotions and experiences shared between horse and rider</div>
            </div>
            
            <h1>The Emotional Bond</h1>
            
            ${feelings
              .map((item, index) => {
                // Get the image URL, either from the item, the default map, or use the default image
                const imageUrl =
                  item.imageUrl ||
                  defaultImageMap[item.feeling] ||
                  defaultImageMap.default

                return `
                <div class="item">
                  <div class="item-header">
                    <img class="item-image" src="${imageUrl}" alt="${
                      item.feeling
                    }">
                    <div class="item-title">${item.feeling}</div>
                  </div>
                  <div class="item-content">
                    <div class="description">${item.description}</div>
                  </div>
                  <div class="page-number">${index + 1} / ${
                    feelings.length
                  }</div>
                </div>
              `
              })
              .join('')}
            
            <div class="footer">
              Generated on ${new Date().toLocaleDateString()} | © ${new Date().getFullYear()} Horse Rider Connection
            </div>
          </div>
        </body>
      </html>
    `
  }

  // Function to generate and download the PDF
  const downloadPdf = async () => {
    try {
      setLoading(true)

      // Generate the PDF from HTML
      const html = generateHtml()
      const { uri } = await Print.printToFileAsync({
        html,
        base64: false,
      })

      // Get the file name
      const fileName = `${title.replace(
        /\s+/g,
        '_',
      )}_${new Date().getTime()}.pdf`

      // Create the final file path in the documents directory
      const fileUri = FileSystem.documentDirectory + fileName

      // Copy the temporary file to the documents directory
      await FileSystem.copyAsync({
        from: uri,
        to: fileUri,
      })

      // Share the PDF file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri)
      } else {
        alert('Sharing is not available on this device')
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF')
    }
  }

  // Preview component that shows what the PDF will look like
  const PdfPreview = () => {
    const feelings = data.horse_rider_feelings

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={previewVisible}
        onRequestClose={() => setPreviewVisible(false)}
      >
        <SafeAreaView style={styles.previewContainer}>
          <View style={styles.previewHeader}>
            <Text style={styles.previewHeaderTitle}>PDF Preview</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setPreviewVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.previewScroll}>
            {/* Content Preview */}
            <View style={styles.previewContent}>
              {/* Cover Section */}
              <View style={styles.previewCoverSection}>
                <View style={styles.previewCoverImageContainer}>
                  <Image
                    source={{ uri: coverImageUrl }}
                    style={styles.previewCoverImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.previewCoverTitle}>{title}</Text>
                <Text style={styles.previewCoverSubtitle}>
                  A collection of emotions and experiences shared between horse
                  and rider
                </Text>
              </View>

              <Text style={styles.previewSectionTitle}>The Emotional Bond</Text>

              {feelings.map((item, index) => {
                const imageUrl =
                  item.imageUrl ||
                  defaultImageMap[item.feeling] ||
                  defaultImageMap.default

                return (
                  <View key={item.id} style={styles.previewItem}>
                    <View style={styles.previewItemHeader}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={styles.previewItemImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.previewItemTitle}>
                        {item.feeling}
                      </Text>
                    </View>
                    <View style={styles.previewItemContent}>
                      <Text style={styles.previewItemDescription}>
                        {item.description}
                      </Text>
                    </View>
                    <Text style={styles.previewPageNumber}>
                      {index + 1} / {feelings.length}
                    </Text>
                  </View>
                )
              })}

              <Text style={styles.previewFooter}>
                Generated on {new Date().toLocaleDateString()} | ©{' '}
                {new Date().getFullYear()} Horse Rider Connection
              </Text>
            </View>
          </ScrollView>

          <View style={styles.previewActions}>
            <TouchableOpacity
              style={styles.previewDownloadButton}
              onPress={() => {
                setPreviewVisible(false)
                downloadPdf()
              }}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.previewDownloadButtonText}>
                  Download PDF
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.previewButton}
        onPress={() => setPreviewVisible(true)}
      >
        <Text style={styles.previewButtonText}>Preview PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={downloadPdf}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.buttonText}>Download PDF</Text>
        )}
      </TouchableOpacity>

      <PdfPreview />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  previewButton: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Preview Modal Styles
  previewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  previewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  previewHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    color: '#3498db',
    fontSize: 16,
  },
  previewScroll: {
    flex: 1,
  },
  previewContent: {
    padding: 20,
  },

  // Cover Preview Styles - integrated with the page
  previewCoverSection: {
    marginBottom: 60,
    alignItems: 'center',
  },
  previewCoverImageContainer: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
  previewCoverImage: {
    width: '100%',
    height: 250,
  },
  previewCoverTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 10,
  },
  previewCoverSubtitle: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  previewSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',
  },

  // Item styling - integrated with the page
  previewItem: {
    marginBottom: 60,
    backgroundColor: 'transparent',
  },
  previewItemHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  previewItemImage: {
    width: '100%',
    height: 200,
  },
  previewItemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 16,
    marginBottom: 10,
  },
  previewItemContent: {
    padding: 0,
  },
  previewItemDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 10,
  },
  previewPageNumber: {
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    color: '#777',
    fontSize: 12,
    fontStyle: 'italic',
  },
  previewFooter: {
    textAlign: 'center',
    padding: 30,
    marginTop: 60,
    borderTopWidth: 1,
    borderTopColor: '#d5d5d5',
    color: '#666',
    fontSize: 14,
  },
  previewActions: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  previewDownloadButton: {
    backgroundColor: '#16a085',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewDownloadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default DownloadPdf
