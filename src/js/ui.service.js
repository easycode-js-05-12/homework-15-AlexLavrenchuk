import { expensesList, incomeList, inputDescription, inputValue, select} from './elements';
import { income } from './main';

export class UiService {
    constructor() {
        this.description = inputDescription.value || '';
        this.value = select.value === "income" ? +inputValue.value : -inputValue.value;
        this.type = select.value || null;
        this.id = this._idGenerator() || null;
    }

    get_valueUi() {
        return this.description, this.value, this.type, this.id;
    }

    set_valueUi(newDescription, newValue, newType) {
        if (!newDescription) return console.log('no description');
        if (!newValue && newValue === "number" && newValue === "NaN" && newValue === "null") return console.log('no number');
        if (!newType) return console.log('no value for select');

        this.description = newDescription,
        this.value = newValue,
        this.type = newType,
        this.id = this._idGenerator()
    }

    addValue() {
        let template = this._markup();
        if (this.type === "income") {
            incomeList.insertAdjacentHTML('beforeend', template);
        } else {
            expensesList.insertAdjacentHTML('beforeend', template);
        }
    }

    _markup() {
        return `
        <div class="item clearfix" data-id="${this.id}">
            <div class="item__description">${this.description}</div>
            <div class="right clearfix">
                <div class="item__value">${this.value}</div>
                <div class="item__percentage" style="${this.type === 'expense' ? 'display: block' : 'display: none'}">${(100 / (income / this.value)).toFixed(1)}%</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>`
    }

    _idGenerator() {
        return Math.random().toString(36).slice(2);    
    }
}