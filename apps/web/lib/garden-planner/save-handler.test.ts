import { describe, it, expect } from 'vitest'
import {
    convertV0_1CodestoV0_2,
    convertV_0_2Codesto_V_0_3,
    convertV_0_3Codesto_V_0_4,
    convertV_0_3SettingsToV_0_4Settings,
    parseSave
} from './save-handler'

describe('Save Handler Backward Compatibility', () => {
    // Sample save codes from different versions
    const v0_1Save = 'v0.1_DIM-111-111-111_CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo-ToNaNaCoToNaCoCoTo-ToBlBlToBlBlNaToCo-ApApApApApApApApAp-BlBlToBlBlToCoToNa-NaNaToWhNaNaRiWhNa-CoCoCoToCoToNaToNa-ToNaNaNaNaPoNaPoOn'
    const v0_3Save = 'v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN_D30NrNssL50Cr0.Bb.S7-BbS6'
    const v0_4Save = 'v0.4_D-111-111-111_CR-PBkRTCTRBkP-BkPBkCTCBkRBk-RBkPTCTPBkR-PBkRTCTRBkP-A.HA.HA.HA.HA.HA.HA.HA.HA.H-RBkPTCTPBkR-PBkRTCTRBkP-BkPBkCTCBkRBk-RBkPTCTPBkR_L50Cr0.A.P-SP-BkS'

    describe('Full save code conversion', () => {
        it('should fully convert a 0.3 save to 0.4 save in the expected format (Test 1 - Butterfly Beans is converted)', () => {
            const v0_3Save = 'v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN_D30NrNssL50Cr0.Bb.S7-BbS6'
            const expectedDimensionInfo = 'D-111-111-111'
            const expectedCropsInfo = 'CR-BtBtBtBtBtBtBtBtBt-BtNBtBtNBtBtBtBt-BtBtBtBtBtBtBtBtN-BtBtBtBtBtBtBtBtBt-BtBtBtBtBtBtBtBtBt-BtBtNBtBtNBtBtN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
            const expectedSettingsInfo = 'D30NrNssL50Cr0.Bt.S7-BtS6'

            const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_3Save)

            expect(version).toBe('0.4')
            expect(dimensionInfo).toBe(expectedDimensionInfo)
            expect(cropInfo).toBe(expectedCropsInfo)
            expect(settingsInfo).toBe(expectedSettingsInfo)
        })

        it('should fully convert a 0.3 save to 0.4 save in the expected format (Test 2 - No changes except for version expected)', () => {
            const v0_3Save = 'v0.3_D-111-111-111_CR-Cb.HP.HO.HBk.HSSO.HSS-BkCbPAAAAAA-OBkCb.HBBPBBO-PCbBkCrWOBkCbP-AAACrCb.YBkAAA-PCbBkOWCrBkCbP-OBBPBBCb.HBkO-AAAAAAPCbBk-SSO.HSSBk.HO.HP.HCb.H_D30L25Cr0.BkS-OP-WS-PS-CrP-CbP-SP-BP-AP'
            const expectedDimensionInfo = 'D-111-111-111'
            const expectedCropsInfo = 'CR-Cb.HP.HO.HBk.HSSO.HSS-BkCbPAAAAAA-OBkCb.HBBPBBO-PCbBkCrWOBkCbP-AAACrCb.YBkAAA-PCbBkOWCrBkCbP-OBBPBBCb.HBkO-AAAAAAPCbBk-SSO.HSSBk.HO.HP.HCb.H'
            const expectedSettingsInfo = 'D30L25Cr0.BkS-OP-WS-PS-CrP-CbP-SP-BP-AP'

            const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_3Save)

            expect(version).toBe('0.4')
            expect(dimensionInfo).toBe(expectedDimensionInfo)
            expect(cropInfo).toBe(expectedCropsInfo)
            expect(settingsInfo).toBe(expectedSettingsInfo)
        })

        it('should fully convert a 0.3 save to 0.4 save in the expected format (Test 3 - Butterfly and Blueberries Mixed)', () => {
            const v0_3Save = 'v0.3_D-111-111-111_CR-BbBbBBbBbBBBB-BBbBbBBbBbBBB-BbBbNBbBbNBbBbN-BBBBBBBBB-BBBBBbBbBBbBb-BbBbNNNNNNN-BbBbBbBbBbBbNNN-BbBBBbBBNNN-NNNNNNNNN_Cr0.Bb.S3-BbS5-B.S4-BS7'
            const expectedDimensionInfo = 'D-111-111-111'
            const expectedCropsInfo = 'CR-BtBtBBtBtBBBB-BBtBtBBtBtBBB-BtBtNBtBtNBtBtN-BBBBBBBBB-BBBBBtBtBBtBt-BtBtNNNNNNN-BtBtBtBtBtBtNNN-BtBBBtBBNNN-NNNNNNNNN'
            const expectedSettingsInfo = 'Cr0.Bt.S3-BtS5-B.S4-BS7'

            const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_3Save)

            expect(version).toBe('0.4')
            expect(dimensionInfo).toBe(expectedDimensionInfo)
            expect(cropInfo).toBe(expectedCropsInfo)
            expect(settingsInfo).toBe(expectedSettingsInfo)
        })

        it('should handle v0.4 saves without conversion', () => {
            const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_4Save)

            expect(version).toBe('0.4')
            expect(dimensionInfo).toBe('D-111-111-111')
            expect(cropInfo).toBe('CR-PBkRTCTRBkP-BkPBkCTCBkRBk-RBkPTCTPBkR-PBkRTCTRBkP-A.HA.HA.HA.HA.HA.HA.HA.HA.H-RBkPTCTPBkR-PBkRTCTRBkP-BkPBkCTCBkRBk-RBkPTCTPBkR')
            expect(settingsInfo).toBe('L50Cr0.A.P-SP-BkS')
        })
    })

    describe('Individual conversion functions', () => {
        it('should convert v0.1 codes to v0.2', () => {
            const v0_1Crops = 'CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo'
            const expectedV0_2 = 'CROPS-NNTNTCoTCoCo-NNNTNTCoTCo'
            expect(convertV0_1CodestoV0_2(v0_1Crops)).toBe(expectedV0_2)
        })

        it('should convert v0.2 codes to v0.3', () => {
            const v0_2Save = 'CROPS-NNTNTCrTCrCr-NNNTNTCTCr-TNNCrTNCrCrT-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
            const expectedV0_3Save = 'CR-NNTNTCrTCrCr-NNNTNTCTCr-TNNCrTNCrCrT-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
            expect(convertV_0_2Codesto_V_0_3(v0_2Save)).toBe(expectedV0_3Save)
        })

        it('should convert v0.2 codes to v0.3 (with Fertilizer)', () => {
            const v0_2Save = 'CROPS-NN.HpTNTCrTCrCr-NNNTNTCTCr.Hp-TNN.HpCrTNCrCrT.Hp-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
            const expectedV0_3Save = 'CR-NN.YTNTCrTCrCr-NNNTNTCTCr.Y-TNN.YCrTNCrCrT.Y-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
            expect(convertV_0_2Codesto_V_0_3(v0_2Save)).toBe(expectedV0_3Save)
        })

        it('should convert v0.3 codes to v0.4', () => {
            const v0_3Save = 'CR-NN.YTNTCrTCrCr-NNNTNTCTCr.Y-TNNCrTNCrCrT.Y-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
            const expectedV0_4Save = 'CR-NN.YTNTCrTCrCr-NNNTNTCTCr.Y-TNNCrTNCrCrT.Y-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
            expect(convertV_0_3Codesto_V_0_4(v0_3Save)).toBe(expectedV0_4Save)
        })

        it('should convert v0.3 codes to v0.4 (Butterfly Beans Focus)', () => {
            const v0_3Save = 'CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
            const expectedV0_4Save = 'CR-BtBtBtBtBtBtBtBtBt-BtNBtBtNBtBtBtBt-BtBtBtBtBtBtBtBtN-BtBtBtBtBtBtBtBtBt-BtBtBtBtBtBtBtBtBt-BtBtNBtBtNBtBtN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
            expect(convertV_0_3Codesto_V_0_4(v0_3Save)).toBe(expectedV0_4Save)
        })
    })

    describe('Settings conversion', () => {
        it('should convert v0.3 settings to v0.4 settings (no harvest settings)', () => {
            const v0_3Settings = 'D30NrNssL50Cr0.Bb.S7-BbS6'
            const expectedV0_4Settings = 'D30NrNssL50Cr0.Bt.S7-BtS6'
            expect(convertV_0_3SettingsToV_0_4Settings(v0_3Settings)).toBe(expectedV0_4Settings)
        })

        it('should convert v0.3 settings to v0.4 settings (with harvest settings)', () => {
            const v0_3Settings = 'D30L25Cr0.BkS-OP-WS-PS-CrP-CbP-SP-BP-AP'
            const expectedV0_4Settings = 'D30L25Cr0.BkS-OP-WS-PS-CrP-CbP-SP-BP-AP'
            expect(convertV_0_3SettingsToV_0_4Settings(v0_3Settings)).toBe(expectedV0_4Settings)
        })

        it('should handle empty settings', () => {
            expect(convertV_0_3SettingsToV_0_4Settings('')).toBe('')
        })
    })

    describe('Error handling', () => {
        it('should throw error for invalid save version', () => {
            const invalidSave = 'v0.5_D-111-111-111_CR-NNNNNNNNN'
            expect(() => parseSave(invalidSave)).toThrow('Invalid save version: 0.5')
        })

        it('should handle malformed save codes gracefully', () => {
            const malformedSave = 'invalid_save_code'
            const result = parseSave(malformedSave)
            expect(result.version).toBe('')
            expect(result.dimensionInfo).toBe('')
            expect(result.cropInfo).toBe('')
            expect(result.settingsInfo).toBe('')
        })

        it('should throw error for invalid crop setting format', () => {
            const invalidSettings = 'Cr0.InvalidFormat'
            expect(() => convertV_0_3SettingsToV_0_4Settings(invalidSettings)).toThrow('Invalid crop setting format')
        })
    })

    describe('Edge cases', () => {
        it('should handle saves without settings', () => {
            const saveWithoutSettings = 'v0.4_D-111-111-111_CR-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
            const result = parseSave(saveWithoutSettings)
            expect(result.version).toBe('0.4')
            expect(result.settingsInfo).toBe('')
        })

        it('should handle saves with empty crop sections', () => {
            const saveWithEmptyCrops = 'v0.4_D-111-111-111_CR-'
            const result = parseSave(saveWithEmptyCrops)
            expect(result.version).toBe('0.4')
            expect(result.cropInfo).toBe('CR-')
        })

        it('should handle minimal valid save', () => {
            const minimalSave = 'v0.4_D-1_CR-N'
            const result = parseSave(minimalSave)
            expect(result.version).toBe('0.4')
            expect(result.dimensionInfo).toBe('D-1')
            expect(result.cropInfo).toBe('CR-N')
        })
    })
}) 