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
 * @description 新增加通知
 */
 export const moduleAdd=asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    const { sqlObj } = tools.sqlDeal(req.body);
    let result = null;
    if(true){
        const add = `insert into module set ?`;
        result = await mysqlDb.execute(add, sqlObj);
        sendResponse(res, 200, sucessCallbackVal(code.successCode, null, '成功', true));
    }
    else{
        sendResponse(res, 500, sucessCallbackVal(code.successCode, null, '新增失敗', true));

    }
    
});
