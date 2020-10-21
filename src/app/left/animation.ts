import {trigger,style,state,transition,animate} from '@angular/animations';

export const ExpandLeftTrigger = trigger("expandLeft",[
state("expand",style({
        "margin-left":"0%"

    })),
    state("fold",style({
        "margin-left":"-29.9%"

    })),
    transition("expand => fold",animate("100ms")),
    transition("fold => expand",animate("200ms"))
]);