import accountApi from 'api/accountApi';
import { SEARCH_ASSET_DTA_REQUEST } from '../reducer/AccountReducer';

export const selectSlip = (
    action // 전표 조회 사가
) =>
    accountApi.get('/posting/rangedsliplist', {
        params: {
            startDate: action.params.startDate,
            endDate: action.params.endDate,
            slipStatus: action.params.slipStatus
        }
    });
// 전표 삭제 사가
export const deleteSlip = (action) =>
    accountApi.get('/posting/deleteSlip', {
        params: { slipNo: action.params.slipNo }
    });

export const updateSlip = (action) =>
    accountApi.get('/account/updateSlip', {
        params: {
            // slipType: action.payload.slipType,
            expenseReport: action.params.expenseReport,
            slipNo: action.params.slipNo
        }
    });
export const registerslip = (action) =>
    accountApi.get('/posting/registerslip', {
        params: {
            slipObj: action.params.slipData,
            journalObj: action.params.journalData,
            slipStatus: action.params.slipStatus
        }
    });
export const searchJournal = (action) =>
    accountApi.get('/posting/singlejournallist', {
        params: { slipNo: action.params.slipNo }
    });

export const deleteJournal = (action) =>
    accountApi.get('/posting/journalremoval', {
        params: {
            journalNo: action.params.journalNo
        }
    });

export const saveJournal = (action) =>
    accountApi.post('/posting/registerslip', {
        slipData: action.payload.slipData
    });

export const updateJournal = (action) =>
    accountApi.post(
        '/posting/updateJournalList',
        { journalList: action.payload.journalList },
        { headers: { 'Content-Type': 'application/json' } }
    );

export const searchJournalDetail = (action) =>
    accountApi.get('/posting/journaldetaillist', {
        params: { journalNo: action.params.journalNo }
    });

export const saveJournalDetail = (action) =>
    accountApi.post(
        '/account/SaveJournalDetailList',
        { SaveJournalDetailList: action.payload.SaveJournalDetailList },
        { headers: { 'Content-Type': 'application/json' } }
    );

export const hrAddSlip = (action) =>
    accountApi.post('/account/hrAddSlip', { slipData: action.payload.slipData }, { headers: { 'Content-Type': 'application/json' } });

export const amSlipRequest = (action) =>
    accountApi.get('/posting/approvalsliplist', {
        params: {
            startDate: action.params.startDate,
            endDate: action.params.endDate
        }
    });

export const amJournalRequest = (action) =>
    accountApi.get('/account/findSingleJournalList', {
        params: {
            slipNo: action.params.slipNo
        }
    });

export const getJournalNo = (action) =>
    accountApi.get('/account/getJournalDetailList', {
        params: {
            journalNo: action.params.journalNo
        }
    });

export const selectGeneralAccountLedger = (action) =>
    accountApi.get('/posting/generalLedgers', {
        params: {
            startDate: action.params.startDate,
            endDate: action.params.endDate
        }
    });

export const searchJournalDouble = (action) =>
    accountApi.get('/posting/rangedjournallist', {
        params: {
            startDate: action.params.startDate,
            endDate: action.params.endDate
        }
    });

export const selectNonCurrent = (action) =>
    accountApi.get('/posting/findCurrentAssetList', {
        params: {
            accountCode: action.params.accountCode,
            accountName: action.params.accountName
        }
    });

export const saveNonCurrent = (action) =>
    accountApi.post('/CurrentAsset/insertCurrentAsset', {
        params: action.params
    });

export const deleteNonCurrent = (action) =>
    accountApi.get('/CurrentAsset/deleteCurrentAsset', {
        params: { assetCode: action.param.assetCode }
    });

//자산 관리 리스트
export const searchCurrent = (action) => accountApi.get('/posting/assetlist', {});

//세부자산관리 리스트
export const searchAssetList = (action) =>
    accountApi.get('/posting/assetitemlist', {
        params: {
            parentsCode: action.params.parentsCode
        }
    });

export const searchAssetDta = (action) =>
    accountApi.get('/posting/assetDta', {
        params: {
            parentsCode: action.params.parentsCode
        }
    });

export const searchDept = (action) => accountApi.get('/operate/deptlist', {});
