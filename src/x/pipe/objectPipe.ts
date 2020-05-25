import { Pipe, PipeTransform } from '@angular/core';
import { getRoles } from '../storage/storage';
import { IRole } from 'src/app/admin/shared/services.service';

@Pipe({ name: 'roleName' })
export class RoleNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getRoles().filter((role: IRole) => role.id === id);
    if (this.data[0]) {
      return this.data[0].name;
    }
  }
}