import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'


const Documento = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text> Seção 1</Text>
            </View>
            <View style={styles.section}>
                <Text> Seção 2</Text>
            </View>
        </Page>
    </Document>
)

export default Documento

const styles = StyleSheet.create({
    page:{ 
        flexDirection: 'row',
        backgroundColor:'#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow:1,
        backgroundColor: '00F'
    }
})
