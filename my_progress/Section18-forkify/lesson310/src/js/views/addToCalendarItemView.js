import View from './View.js';

class AddToCalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    console.log(this._data);
    return 'Test';
  }
}

export default new AddToCalendarItemView();
