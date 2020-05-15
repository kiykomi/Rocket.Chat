import { IUserCommonUtils, UserCommonUtils } from '../lib/IUserCommonUtils';
import { settings } from '../../settings/client';
import { CommonUtils, ICommonUtils } from '../lib/ICommonUtils';
import { AbstractRoomCommonUtils, IRoomCommonUtils } from '../lib/IRoomCommonUtils';
import { ISettingsBase } from '../../settings/lib/settings';
import { openRoom } from '../../ui-utils/client/lib/openRoom';
import { Users } from '../../models/client';

class RoomCommonUtils extends AbstractRoomCommonUtils implements IRoomCommonUtils {

    constructor(settings: ISettingsBase, CommonUtils: ICommonUtils) {
        super(settings, CommonUtils);
    }

    openRoom(type: string, name: string): Promise<any> {
         return openRoom(type, name);
    }

}

export const commonUtils: ICommonUtils = new CommonUtils(settings);
export const userCommonUtils: IUserCommonUtils = new UserCommonUtils(Users, settings, commonUtils);
export const roomCommonUtils: IRoomCommonUtils = new RoomCommonUtils(settings, commonUtils);