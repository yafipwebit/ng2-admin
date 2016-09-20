import {OnInit, Component} from "@angular/core";

@Component({
    selector: '',
    templateUrl: `
<div class="row">
    <div class="col-md-6">
        <h2>添加表</h2>
        <form>
            <div class="form-group">
                <label for="tableName">表名</label>
                <div class="input-group">
                    <input name="tableName" type="text" class="form-control" placeholder="mysql表名">
                </div>
                <button type="submit" class="btn btn-danger">保存</button>
            </div>
        </form>
    </div>
    <div class="col-md-6">
        <h2>表菜单关联</h2>
    </div>
</div>
    `
})
export class EditTableComponent implements OnInit {


}