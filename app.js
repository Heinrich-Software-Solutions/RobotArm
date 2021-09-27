const { Board, Led } = require("johnny-five");
const { RaspiIO } = require("raspi-io");
const board = new Board({
    io: new RaspiIO()
});

board.on("ready", () => {
    const AXIS_1_A = new Led("GPIO2");
    const AXIS_1_B = new Led("GPIO3");

    const AXIS_2_A = new Led("GPIO4");
    const AXIS_2_B = new Led("GPIO17");

    const AXIS_3_A = new Led("GPIO27");
    const AXIS_3_B = new Led("GPIO22");

    const AXIS_4_A = new Led("GPIO10");
    const AXIS_4_B = new Led("GPIO9");

    const AXIS_5_A = new Led("GPIO11");
    const AXIS_5_B = new Led("GPIO5");

    const AXIS_1_MOSFET = new Led("GPIO6");
    const AXIS_2_MOSFET = new Led("GPIO13");
    const AXIS_3_MOSFET = new Led("GPIO19");
    const AXIS_4_MOSFET = new Led("GPIO26");
    const AXIS_5_MOSFET = new Led("GPIO14");

    AXIS_1_MOSFET.blink(500);
    AXIS_2_MOSFET.blink(600);
    AXIS_3_MOSFET.blink(700);
    AXIS_4_MOSFET.blink(800);
    AXIS_5_MOSFET.blink(900);

    console.log("Running...");
});