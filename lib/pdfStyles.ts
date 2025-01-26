import { StyleSheet } from '@react-pdf/renderer';

const colors = {
    gray200: '#e5e7eb',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    'gray550/900': 'rgb(115 115 115 / 0.9)'
}

export const pdfTypography = StyleSheet.create({
    title: {
        fontFamily: "Geist",
        fontSize: 8,
        fontWeight: "semibold",
        textTransform: "uppercase",
        color: colors.gray400,
        marginBottom: 6
    },
    subTitle: {
        fontFamily: "Berkeley Mono",
        fontSize: 9,
    },
    text2xl: {
        fontFamily: "Berkeley Mono",
        fontSize: 16,
        marginBottom: 8
    },
    description: {
        fontFamily: "Berkeley Mono",
        color: colors['gray550/900'],
        fontSize: 8,
        lineHeight: 1.4
    },
    itemDescription: {
        fontFamily: "Berkeley Mono",
        color: colors.gray600,
        fontSize: 8,
        lineHeight: 1.4
    },
    amount: {
        fontFamily: "Berkeley Mono",
        fontSize: 11,
        flexWrap: 'wrap'
    },
    paymentTitle: {
        fontFamily: "Geist",
        fontSize: 8,
        fontWeight: "normal",
        flexWrap: 'wrap',
        color: colors.gray500
    },
    thankYou: {
        fontFamily: "Berkeley Mono",
        fontSize: 8,
        color: "#666",
        textAlign: "right"
    }
})

export const pdfUtils = StyleSheet.create({
    flexRowBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    borderTop: { borderTop: `1px solid ${colors.gray200}`, borderTopStyle: 'dashed', },
    borderBottom: { borderBottom: `1px solid ${colors.gray200}`, borderBottomStyle: 'dashed', },
    borderLeft: { borderLeft: `1px solid ${colors.gray200}`, borderLeftStyle: 'dashed', },
    borderRight: { borderRight: `1px solid ${colors.gray200}`, borderRightStyle: 'dashed', },
    flexRowItemCenter: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    flexRowItemSpaceAround: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    flexColBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
})

export const pdfContainers = StyleSheet.create({
    page: {
        fontFamily: "Berkeley Mono",
        padding: "28px 0",
        fontSize: 8,
        lineHeight: 1.4
    },
    invoiceTerms: {
        paddingHorizontal: 28,
        paddingVertical: 16,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'row',
    },
    yourDetails: {
        paddingHorizontal: 28,
        paddingVertical: 16,
        flex: 1,
        borderRight: `1px solid ${colors.gray200}`,
        borderRightStyle: 'dashed'
    },
    companyDetails: {
        paddingHorizontal: 28,
        paddingVertical: 16,
        flex: 1
    },
    imageContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 28,
        marginBottom: 12
    }
})


