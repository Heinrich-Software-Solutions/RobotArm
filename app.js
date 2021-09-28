const temporal = require("temporal");

const five = require("johnny-five");

const Event = require("events");

const Events = new Event();

const { RaspiIO } = require("raspi-io");

const board = new five.Board({
    io: new RaspiIO(),
});

board.on("ready", () => {
    var AXIS_1_A = new five.Led("GPIO19");
    var AXIS_1_B = new five.Led("GPIO13");
    var AXIS_1_MOSFET = new five.Led("GPIO26");

    var AXIS_2_A = new five.Led("GPIO5");
    var AXIS_2_B = new five.Led("GPIO6");
    var AXIS_2_MOSFET = new five.Led("GPIO25");

    var AXIS_3_A = new five.Led("GPIO9");
    var AXIS_3_B = new five.Led("GPIO11");
    var AXIS_3_MOSFET = new five.Led("GPIO16");

    var AXIS_4_A = new five.Led("GPIO27");
    var AXIS_4_B = new five.Led("GPIO22");
    var AXIS_4_MOSFET = new five.Led("GPIO21");

    var AXIS_5_A = new five.Led("GPIO4");
    var AXIS_5_B = new five.Led("GPIO17");
    var AXIS_5_MOSFET = new five.Led("GPIO20");

    //ARM AXIS 2
    // 1 is Up
    // 0 is Down

    Events.on("AXIS 1", function (DIRECTION, POWER, PEAKTIME, TIME) {
        if (DIRECTION == 0) {
            AXIS_1_MOSFET.fade(POWER, PEAKTIME);
            AXIS_1_A.on();
            AXIS_1_B.off();
            setTimeout(() => {
                AXIS_1_A.off();
                AXIS_1_B.off();
                return null;
            }, TIME);
        }
        if (DIRECTION == 1) {
            AXIS_1_MOSFET.fade(POWER, PEAKTIME);
            AXIS_1_A.off();
            AXIS_1_B.on();
            setTimeout(() => {
                AXIS_1_A.off();
                AXIS_1_B.off();
                return null;
            }, TIME);
        }
    });

    //GRIPPER
    // 1 is Close
    // 0 is Open

    Events.on("AXIS 2", function (DIRECTION, POWER, PEAKTIME, TIME) {
        if (DIRECTION == 0) {
            AXIS_2_MOSFET.fade(POWER, PEAKTIME);
            AXIS_2_A.on();
            AXIS_2_B.off();
            setTimeout(() => {
                AXIS_2_A.off();
                AXIS_2_B.off();
                return null;
            }, TIME);
        }
        if (DIRECTION == 1) {
            AXIS_2_MOSFET.fade(POWER, PEAKTIME);
            AXIS_2_A.off();
            AXIS_2_B.on();
            setTimeout(() => {
                AXIS_2_A.off();
                AXIS_2_B.off();
                return null;
            }, TIME);
        }
    });

    Events.on("AXIS 3", function (DIRECTION, POWER, PEAKTIME, TIME) {
        if (DIRECTION == 0) {
            AXIS_3_MOSFET.fade(POWER, PEAKTIME);
            AXIS_3_A.on();
            AXIS_3_B.off();
            setTimeout(() => {
                AXIS_3_A.off();
                AXIS_3_B.off();
                return null;
            }, TIME);
        }
        if (DIRECTION == 1) {
            AXIS_3_MOSFET.fade(POWER, PEAKTIME);
            AXIS_3_A.off();
            AXIS_3_B.on();
            setTimeout(() => {
                AXIS_3_A.off();
                AXIS_3_B.off();
                return null;
            }, TIME);
        }
    });

    //HEAD TILT
    // 1 is Down
    // 0 is Up

    Events.on("AXIS 4", function (DIRECTION, POWER, PEAKTIME, TIME) {
        if (DIRECTION == 0) {
            AXIS_4_MOSFET.fade(POWER, PEAKTIME);
            AXIS_4_A.on();
            AXIS_4_B.off();
            setTimeout(() => {
                AXIS_4_A.off();
                AXIS_4_B.off();
                return null;
            }, TIME);
        }
        if (DIRECTION == 1) {
            AXIS_4_MOSFET.fade(POWER, PEAKTIME);
            AXIS_4_A.off();
            AXIS_4_B.on();
            setTimeout(() => {
                AXIS_4_A.off();
                AXIS_4_B.off();
                return null;
            }, TIME);
        }
    });

    //PLATTFORM
    // 1 is Left
    // 0 is Right

    Events.on("AXIS 5", function (DIRECTION, POWER, PEAKTIME, TIME) {
        if (DIRECTION == 0) {
            AXIS_5_MOSFET.fade(POWER, PEAKTIME);
            AXIS_5_A.on();
            AXIS_5_B.off();
            setTimeout(() => {
                AXIS_5_A.off();
                AXIS_5_B.off();
                return null;
            }, TIME);
        }
        if (DIRECTION == 1) {
            AXIS_5_MOSFET.fade(POWER, PEAKTIME);
            AXIS_5_A.off();
            AXIS_5_B.on();
            setTimeout(() => {
                AXIS_5_A.off();
                AXIS_5_B.off();
                return null;
            }, TIME);
        }
    });

    Events.emit("AXIS 1", 0, 100, 1, 4500);
    Events.emit("AXIS 5", 1, 100, 1, 1000);

    temporal.queue([{
        delay: 3000,
        task: function () {
            Events.emit("AXIS 1", 0, 100, 100, 2500);
            console.log("MOVE ARM DOWN");
        },
    },
    {
        delay: 3000,
        task: function () {
            Events.emit("AXIS 2", 1, 100, 100, 1000);
            console.log("GRIPPER CLOSING");
        },
    },
    {
        delay: 1000,
        task: function () {
            Events.emit("AXIS 1", 1, 100, 100, 4000);
            console.log("MOVE ARM UP");
        },
    },
    {
        delay: 4000,
        task: function () {
            Events.emit("AXIS 5", 0, 100, 100, 11000);
            console.log("PLATFORM NOW MOVING");
        },
    },
    {
        delay: 11000,
        task: function () {
            Events.emit("AXIS 1", 0, 100, 100, 2500);
            console.log("MOVE ARM DOWN");
        },
    },
    {
        delay: 4000,
        task: function () {
            Events.emit("AXIS 2", 0, 100, 100, 1000);
            console.log("GRIPPER OPENING");
        },
    },
    {
        delay: 1000,
        task: function () {
            Events.emit("AXIS 2", 1, 100, 100, 1000);
            console.log("GRIPPER CLOSING");
        },
    },
    {
        delay: 1000,
        task: function () {
            Events.emit("AXIS 1", 1, 100, 100, 4000);
            console.log("MOVE ARM UP");
        },
    },
    {
        delay: 4000,
        task: function () {
            Events.emit("AXIS 5", 1, 100, 100, 11000);
            console.log("PLATFORM NOW MOVING");
        },
    },
    {
        delay: 4000,
        task: function () {
            Events.emit("AXIS 2", 0, 50, 1000, 1000);
            console.log("GRIPPER OPENING");
        },
    },
    ]);
});