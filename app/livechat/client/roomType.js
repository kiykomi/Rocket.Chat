import { roomCommonUtils, roomTypes, userCommonUtils } from '../../utils/client';
import LivechatRoomType from '../lib/LivechatRoomType';
import { settings } from '../../settings/client';
import { Rooms, Subscriptions, Users } from '../../models/client';
import { AuthorizationUtils } from '../../authorization/client';

roomTypes.add(new LivechatRoomType(settings, Users, Rooms, Subscriptions, AuthorizationUtils, userCommonUtils, roomCommonUtils));
