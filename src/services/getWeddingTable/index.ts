import { GoogleSpreadsheet } from 'google-spreadsheet'
import { mapWeddingTableList } from '@/src/services/getWeddingTable/utils'

const SPREADSHEET_ID = '1x3UD-un9gNp3SS4o8ZMqqTYq6SAKfYqMeV6cNcWCm3k'
const SHEET_ID = '554548078'

export const getWeddingTable = async () => {
  try {
    const credentials = {
      private_key: process.env.GOOGLE_PRIVATE_KEY as string,
      client_email: process.env.GOOGLE_CLIENT_EMAIL as string,
    }
    if (!credentials.client_email || !credentials.private_key) return

    const googleSpreadsheet = new GoogleSpreadsheet(SPREADSHEET_ID)
    await googleSpreadsheet.useServiceAccountAuth(credentials)
    await googleSpreadsheet.loadInfo()
    const sheet = googleSpreadsheet.sheetsById[SHEET_ID]
    const rows = await sheet.getRows()
    return mapWeddingTableList(rows)
  } catch (error) {
    console.error(error)
  }
}
