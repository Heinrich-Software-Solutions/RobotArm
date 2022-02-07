
# RobotArm
Selbstgebauter Roboterarm / Homemade robot arm


## Bilder

![My Robot](https://raw.githubusercontent.com/AlgorithmHuman/RobotArm/main/image.png)

  
## Components
- Jumper Wire Kabel 
- Mikroschalter
- IRF520 MOSFET Driver | 5 x
- Spiralschlauch 6mm
- Roboter-Arm, Modellbausatz
- Relais 3.3v | 10 x
- Raspberry Pi 3 Model B+
- Litzen


## Features
- 4 Achsen
- Greifsystem
- Geschwindigkeitskontrolle
- Richtungswechsel

  
## Tech Stack

**Client:** SSH

**Robot:** Johnny-Five, temporal, Node.js, Raspi IO
  
## To-do-Liste

- GUI App für eine einfachere Kontrolle.

- Mehrere Endschalter für eine genauere Positionskontrolle.

  
## Installation

Clone the project

```bash
  git clone https://github.com/AlgorithmHuman/RobotArm.git
```

Go to the project directory

```bash
  cd RobotArm
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```

  
