const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {

        var t = Toast.alloc().initWithTextDelayDuration("Hello Toaster", 0, 2.0);
        t.show();

        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
