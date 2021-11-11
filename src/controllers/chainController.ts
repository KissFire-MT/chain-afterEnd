import e, { Request, Response, NextFunction } from 'express';
import xlsx from 'node-xlsx';
import co from 'co';
import fs from 'fs'
import OSS,{PutObjectResult} from 'ali-oss'
import asyncHandler from '../middleware/asyncHandler'
import mysqlDb from '../config/db'
import author from '../middleware/author'
import tools from '../utils'
import {code,sucessCallbackVal} from '../utils/variable'
import {userInfoType} from '../interface'
import { sendResponse } from '../middleware/response'

/**
 * @description 查询区块链的信息
 */
 export const findChainInfo=asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    let result = null;
    const decoded=req.decoded; //更具token的信息来查找
    const sqlStr = `select chain_id,chain_hash,chain_name,chain_block,chain_record,chain_point,chain_netsystem from chain where chain_id=?`;
    result = await mysqlDb.execute(sqlStr,  [decoded.id]);
    sendResponse(res, 200, sucessCallbackVal(code.successCode, result.data[0], '成功', true));
});