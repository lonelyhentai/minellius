import {Type} from 'class-transformer';
import {GroupWithPermissionsDto} from './group-with-permissions.dto';
import {UserDto} from './user.dto';

export class AccountDto extends UserDto {
  @Type(() => GroupWithPermissionsDto)
  groups: GroupWithPermissionsDto[];
}
