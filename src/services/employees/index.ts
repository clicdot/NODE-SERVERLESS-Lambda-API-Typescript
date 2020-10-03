import { DBConstants } from './../../common/constants/db/index';
import { DynamodbService } from './../../common/dynamodb/index';

export class EmployeesService {
  tablename = 'wm-ocs-dispatcher-dev';
  private ddb: DynamodbService = new DynamodbService();

  find (): Promise<any> {
    return this.ddb.scan(this.tablename).catch(e => {
      // console.log(e);
      throw new Error(e.message);
    });
  }

  findById (id: string): Promise<any> {
    return this.ddb.get(this.tablename, {
      'EMPLOYEEOBJID': unescape(id)
    }).catch(e => {
      console.log(e);
      throw new Error(e.message);
    });
  }
}
