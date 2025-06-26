/**
 * Save Handler for Palia Garden Planner
 * Provides backward compatibility for save codes from versions 0.1 to 0.4
 * Based on the original Vue.js implementation
 */

import CropCode from './enums/cropCode'
import FertiliserCode from './enums/fertiliserCode'
import { getCropFromCode, getCodeFromCrop } from './cropList'
import { getFertiliserFromCode, getCodeFromFertiliser } from './fertiliserList'

// Legacy crop codes for version 0.1
const v0_1CropCodes: { [key in CropCode]: string } = {
    [CropCode.None]: 'Na',
    [CropCode.Tomato]: 'To',
    [CropCode.Potato]: 'Po',
    [CropCode.Rice]: 'Ri',
    [CropCode.Wheat]: 'Wh',
    [CropCode.Carrot]: 'Ca',
    [CropCode.Onion]: 'On',
    [CropCode.Cotton]: 'Co',
    [CropCode.Blueberry]: 'Bl',
    [CropCode.Apple]: 'Ap',
    [CropCode.Corn]: 'Cr',
    [CropCode.SpicyPepper]: 'Sp',
    [CropCode.NapaCabbage]: 'Nc',
    [CropCode.BokChoy]: 'Bc',
    [CropCode.RockhopperPumpkin]: 'Rp',
    [CropCode.BatterflyBean]: 'Bb'
}

// Legacy crop codes for version 0.2
const v0_2CropCodes: { [key in CropCode]: string } = {
    [CropCode.None]: 'N',
    [CropCode.Tomato]: 'T',
    [CropCode.Potato]: 'P',
    [CropCode.Rice]: 'R',
    [CropCode.Wheat]: 'W',
    [CropCode.Carrot]: 'C',
    [CropCode.Onion]: 'O',
    [CropCode.Cotton]: 'Co',
    [CropCode.Blueberry]: 'B',
    [CropCode.Apple]: 'A',
    [CropCode.Corn]: 'Cr',
    [CropCode.SpicyPepper]: 'S',
    [CropCode.NapaCabbage]: 'Cb',
    [CropCode.BokChoy]: 'Bk',
    [CropCode.RockhopperPumpkin]: 'Pm',
    [CropCode.BatterflyBean]: 'Bb'
}

// Legacy fertilizer codes for version 0.2
const v0_2FertCodes: { [key in FertiliserCode]: string } = {
    [FertiliserCode.None]: 'N',
    [FertiliserCode.SpeedyGro]: 'S',
    [FertiliserCode.QualityUp]: 'Q',
    [FertiliserCode.WeedBlock]: 'W',
    [FertiliserCode.HarvestBoost]: 'H',
    [FertiliserCode.HydratePro]: 'Hp',
}

// Legacy crop codes for version 0.3
const v0_3CropCodes: { [key in CropCode]: string } = {
    [CropCode.None]: 'N',
    [CropCode.Tomato]: 'T',
    [CropCode.Potato]: 'P',
    [CropCode.Rice]: 'R',
    [CropCode.Wheat]: 'W',
    [CropCode.Carrot]: 'C',
    [CropCode.Onion]: 'O',
    [CropCode.Cotton]: 'Co',
    [CropCode.Blueberry]: 'B',
    [CropCode.Apple]: 'A',
    [CropCode.Corn]: 'Cr',
    [CropCode.SpicyPepper]: 'S',
    [CropCode.NapaCabbage]: 'Cb',
    [CropCode.BokChoy]: 'Bk',
    [CropCode.RockhopperPumpkin]: 'Pm',
    [CropCode.BatterflyBean]: 'Bb'
}

// Legacy fertilizer codes for version 0.3
const v0_3FertCodes: { [key in FertiliserCode]: string } = {
    [FertiliserCode.None]: 'N',
    [FertiliserCode.SpeedyGro]: 'S',
    [FertiliserCode.QualityUp]: 'Q',
    [FertiliserCode.WeedBlock]: 'W',
    [FertiliserCode.HarvestBoost]: 'H',
    [FertiliserCode.HydratePro]: 'Y',
}

// Current crop codes for version 0.4
const v0_4CropCodes: { [key in CropCode]: string } = {
    [CropCode.None]: 'N',
    [CropCode.Tomato]: 'T',
    [CropCode.Potato]: 'P',
    [CropCode.Rice]: 'R',
    [CropCode.Wheat]: 'W',
    [CropCode.Carrot]: 'C',
    [CropCode.Onion]: 'O',
    [CropCode.Cotton]: 'Co',
    [CropCode.Blueberry]: 'B',
    [CropCode.Apple]: 'A',
    [CropCode.Corn]: 'Cr',
    [CropCode.SpicyPepper]: 'S',
    [CropCode.NapaCabbage]: 'Cb',
    [CropCode.BokChoy]: 'Bk',
    [CropCode.RockhopperPumpkin]: 'Pm',
    [CropCode.BatterflyBean]: 'Bt'  // Note: Changed from 'Bb' to 'Bt' in v0.4
}

// Helper functions to find codes
function getCropCode(codeList: typeof v0_2CropCodes, codeToFind: string): CropCode | undefined {
    return Object.keys(codeList).find(key =>
        (codeList[key as CropCode] as string) === codeToFind
    ) as CropCode | undefined;
}

function getFertCode(codeList: typeof v0_2FertCodes, codeToFind: string): FertiliserCode | undefined {
    return Object.keys(codeList).find(key =>
        (codeList[key as FertiliserCode] as string) === codeToFind
    ) as FertiliserCode | undefined;
}

/**
 * Converts v0.1 crop codes to v0.2 format
 */
export function convertV0_1CodestoV0_2(save: string): string {
    let newSave = save.replace("CROPS-", "");
    for (const [key, value] of Object.entries(v0_1CropCodes)) {
        newSave = newSave.replaceAll(value, v0_2CropCodes[key as CropCode]);
    }
    return `CROPS-${newSave}`;
}

/**
 * Converts v0.2 crop codes to v0.3 format
 */
export function convertV_0_2Codesto_V_0_3(save: string): string {
    // Remove the "CROPS-" prefix
    const cropSection = save.replace("CROPS-", "");
    const cropSections = cropSection.split('-');

    // Regex to capture crop and optional fertiliser
    const regex = /([A-Z][a-z]?)(?:\.([A-Z][a-z]?))?/g;
    let match: RegExpExecArray | null;
    let newCode = '';

    for (let i = 0; i < cropSections.length; i++) {
        let newSection = '';

        while ((match = regex.exec(cropSections[i]!)) !== null) {
            const cropCode = getCropCode(v0_2CropCodes, match[1]!) ?? CropCode.None;
            const fertCode = getFertCode(v0_2FertCodes, match[2] || '') ?? FertiliserCode.None;

            const crop = v0_3CropCodes[cropCode];
            const fertiliser = v0_3FertCodes[fertCode];

            newSection += `${crop}${(fertiliser && fertiliser !== 'N') ? '.' + fertiliser : ''}`;
        }

        if (i < cropSections.length - 1) {
            newSection += '-';
        }
        newCode += newSection;
    }

    return `CR-${newCode}`;
}

/**
 * Converts v0.3 crop codes to v0.4 format
 */
export function convertV_0_3Codesto_V_0_4(save: string): string {
    // Remove the prefix
    const cropSections = save.split('-');
    if (["CR", "CROPS"].includes(cropSections[0]!)) {
        cropSections.shift();
    }

    // Regex to capture crop and optional fertiliser
    const regex = /([A-Z][a-z]?)(?:\.([A-Z][a-z]?))?/g;
    let match: RegExpExecArray | null;
    let newCode = '';

    for (let i = 0; i < cropSections.length; i++) {
        let newSection = '';

        while ((match = regex.exec(cropSections[i]!)) !== null) {
            const cropCode = getCropCode(v0_3CropCodes, match[1]!) ?? CropCode.None;
            const crop = v0_4CropCodes[cropCode];
            const fertiliser = match[2] as FertiliserCode ?? FertiliserCode.None;

            newSection += `${crop}${(fertiliser && fertiliser !== FertiliserCode.None) ? '.' + fertiliser : ''}`;
        }

        if (i < cropSections.length - 1) {
            newSection += '-';
        }
        newCode += newSection;
    }

    return `CR-${newCode}`;
}

/**
 * Converts v0.3 settings to v0.4 format
 */
export function convertV_0_3SettingsToV_0_4Settings(settings: string): string {
    if (!settings) return '';

    const settingsSplit = settings.split('Cr0');
    let convertedCropSettings = '';
    let convertedSettings = '';

    for (let setting of settingsSplit) {
        if (setting.startsWith('.')) {
            setting = setting.slice(1);
            const cropSettings = setting.split('-');

            for (const cropSetting of cropSettings) {
                if (cropSetting.length === 0) continue;

                const codeMatch = cropSetting.match(/^([A-Z][a-z]?)(\.?)(~?)([PS]?)(\d*)$/);
                if (!codeMatch) {
                    throw new Error(`Invalid crop setting format: ${cropSetting}`);
                }

                const code = codeMatch[1] as string;
                const isStar = codeMatch[2] !== '.';
                const hasGrowthBoost = codeMatch[3] === '~';
                const processAs = codeMatch[4] === 'P' ? 'P' : codeMatch[4] === 'S' ? 'S' : '';
                const crafters = codeMatch[5] ? parseInt(codeMatch[5], 10) : 1;

                const cropCode = getCropCode(v0_3CropCodes, code);
                if (!cropCode) {
                    throw new Error(`Invalid crop setting format: ${cropSetting}`);
                }
                const cropConverted = v0_4CropCodes[cropCode];
                const newCode = `${cropConverted}${isStar ? '' : '.'}${hasGrowthBoost ? '~' : ''}${processAs}${crafters > 1 ? crafters : ''}`;

                convertedCropSettings += `${newCode}-`;
            }
        } else {
            convertedSettings = setting;
        }
    }

    if (convertedCropSettings.length > 0) {
        // Remove the trailing dash
        convertedCropSettings = `Cr0.${convertedCropSettings.substring(0, convertedCropSettings.length - 1)}`;
    }

    return `${convertedSettings}${convertedCropSettings}`;
}

/**
 * Parse result interface
 */
export interface ParseSaveResult {
    version: string;
    dimensionInfo: string;
    cropInfo: string;
    settingsInfo: string;
}

/**
 * Converts a save string to an object containing the save version, dimension info, and crop info of the latest version
 * @param save a save code for the garden planner
 */
export function parseSave(save: string): ParseSaveResult {
    const LATEST_VERSION = '0.4';

    try {
        // This format makes it permanent that the first part of the save is the version number
        const [version, ...rest] = save.split('_');
        let dimensionInfo = rest[0] || '';
        let cropInfo = rest[1] || '';
        let settingsInfo = rest[2] || '';
        let strippedVersion = version?.replace('v', '') || '';

        // Update the save version iteratively based on the version number
        do {
            if (strippedVersion === '') {
                break;
            }

            switch (strippedVersion) {
                case '0.1':
                    validatePlotMatrix(dimensionInfo);
                    cropInfo = convertV0_1CodestoV0_2(cropInfo);
                    strippedVersion = '0.2';
                    break;
                case '0.2':
                    validatePlotMatrix(dimensionInfo);
                    cropInfo = convertV_0_2Codesto_V_0_3(cropInfo);
                    strippedVersion = '0.3';
                    break;
                case '0.3':
                    validatePlotMatrix(dimensionInfo);
                    cropInfo = convertV_0_3Codesto_V_0_4(cropInfo);
                    settingsInfo = convertV_0_3SettingsToV_0_4Settings(settingsInfo);
                    strippedVersion = '0.4';
                    break;
                case '0.4':
                    validatePlotMatrix(dimensionInfo);
                    // Already at latest version
                    break;
                default:
                    throw new Error(`Invalid save version: ${strippedVersion}`);
            }
        } while (strippedVersion !== LATEST_VERSION);

        return {
            version: strippedVersion,
            dimensionInfo,
            cropInfo,
            settingsInfo
        };
    } catch (error) {
        // For malformed save codes, return empty result instead of throwing
        if (error instanceof Error && error.message.includes('Invalid save version') && save.startsWith('v0.')) {
            throw error; // Re-throw version errors for properly formatted save codes with invalid versions
        }
        // For other parsing errors, return empty result
        return {
            version: '',
            dimensionInfo: '',
            cropInfo: '',
            settingsInfo: ''
        };
    }
}

/**
 * Validates dimension info for pre-rewrite saves
 * @param dimensionInfo a string containing a 2d array of 0s and 1s (e.g. 111-010-111)
 * @throws Error if the dimension info is invalid
 */
function validatePlotMatrix(dimensionInfo: string): void {
    if (!dimensionInfo) return;

    const dimensions = dimensionInfo.split('-').slice(1);
    if (dimensions.length === 0) return;

    const rowSize = dimensions.length;
    const colSize = dimensions[0]?.length || 0;

    // Dimension info must be 0 or 1
    for (let i = 0; i < rowSize; i++) {
        const row = dimensions[i];
        if (!row) continue;

        if (row.length !== colSize) {
            throw new Error(`Invalid dimension info: inconsistent row lengths`);
        }

        for (const char of row) {
            if (char !== '0' && char !== '1') {
                throw new Error(`Invalid dimension info: must contain only 0s and 1s`);
            }
        }
    }
}

/**
 * Generates a save code from garden layout
 * @param layout 2D array of plot states (true = active, false = inactive)
 * @param crops 2D array of crop codes for each tile
 * @param fertilizers 2D array of fertilizer codes for each tile
 * @param settingsCode Optional settings code to append
 * @returns Save code string in v0.4 format
 */
export function generateSaveCode(
    layout: boolean[][],
    crops: (CropCode | null)[][][],
    fertilizers: (FertiliserCode | null)[][][],
    settingsCode?: string
): string {
    const version = '0.4';

    // Generate dimension info
    let dimensionInfo = 'D-';
    for (const row of layout) {
        for (const plot of row) {
            dimensionInfo += plot ? '1' : '0';
        }
        dimensionInfo += '-';
    }
    dimensionInfo = dimensionInfo.slice(0, -1); // Remove trailing dash

    // Generate crop info
    let cropInfo = 'CR-';
    for (let plotRow = 0; plotRow < layout.length; plotRow++) {
        for (let plotCol = 0; plotCol < layout[plotRow]!.length; plotCol++) {
            if (layout[plotRow]![plotCol]) {
                // Active plot - add tile data
                const plotCrops = crops[plotRow]?.[plotCol] || [];
                const plotFerts = fertilizers[plotRow]?.[plotCol] || [];

                for (let tileIdx = 0; tileIdx < 9; tileIdx++) {
                    const crop = plotCrops[tileIdx] || CropCode.None;
                    const fert = plotFerts[tileIdx] || FertiliserCode.None;

                    cropInfo += v0_4CropCodes[crop];
                    if (fert !== FertiliserCode.None) {
                        cropInfo += `.${fert}`;
                    }
                }
                cropInfo += '-';
            }
        }
    }
    cropInfo = cropInfo.slice(0, -1); // Remove trailing dash

    // Combine parts
    let saveCode = `v${version}_${dimensionInfo}_${cropInfo}`;
    if (settingsCode) {
        saveCode += `_${settingsCode}`;
    }

    return saveCode;
} 