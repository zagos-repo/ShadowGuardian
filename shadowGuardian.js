const { exec } = require("child_process");

// ألوان ANSI
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const BLUE = "\x1b[34m";
const RESET = "\x1b[0m";

function showBanner() {
    console.log(GREEN + "           ⠀⠀⢀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀");
    console.log(GREEN + "⠀⠀⠀⠀⠀  ⠀  ⣠⣾⡿⠿⠛⠛⠛⠻⠿⢷⣦⠀⠀⠀⠀⠀");
    console.log(GREEN + "⠀⠀⠀⠀⠀    ⣴⡿⠁⠀⠀⠀⢀⣀⠀⠀⠈⢻⣦⠀⠀⠀⠀");
    console.log(GREEN + "⠀⠀⠀⠀    ⣼⡟⠀⢀⣠⣴⣾⠿⠿⣷⣦⡀⠀⢻⣧⠀⠀⠀");
    console.log(GREEN + "⠀⠀⠀    ⢠⣿⠁⣰⡿⠋⠀⠀⠀⠀⠀⠙⢿⡆⠈⣿⡄⠀⠀");
    console.log(GREEN + "⠀⠀⠀    ⢸⡇⠀⣿⠁⠀⠀⢀⣀⠀⠀⠀⠈⣿⠀⢸⡇⠀⠀");
    console.log(GREEN + "⠀⠀⠀    ⠘⣧⠀⠻⣧⡀⠀⠻⠿⠟⠀⢀⣼⠟⠀⣼⠃⠀⠀");
    console.log(GREEN + "⠀⠀⠀    ⠀⠹⣷⡀⠙⠿⣷⣤⣤⣴⡿⠟⢀⣾⠏⠀⠀⠀⠀");
    console.log(GREEN + "⠀⠀⠀    ⠀⠀⠙⢿⣦⡀⠀⠉⠉⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀");
    console.log(GREEN + "⠀⠀⠀  ⠀  ⠀⠀⠀⠙⠻⢷⣶⣶⡾⠟⠋⠀⠀⠀⠀⠀⠀⠀");
    console.log(RESET + BLUE + "     ShadowGuardian v1.2" + RESET);
    console.log(RESET + BLUE +  "      Zakarya Commondo"  +  RESET);
    console.log("");
}

function checkPorts() {
    console.log(GREEN + "[+] فحص المنافذ المفتوحة والمغلقة..." + RESET);
    exec("netstat -tulnp", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout);
    });
}

function scanVulnerabilities() {
    console.log(GREEN + "[+] تحليل النظام وكشف الثغرات..." + RESET);
    exec("nmap -sV --script=vuln localhost", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout);
    });
}

function scanNetwork() {
    console.log(GREEN + "[+] مسح الشبكة وتحديد IPs المشبوهة..." + RESET);
    exec("nmap -sn 192.168.1.0/24", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout);
    });
}

function scanViruses() {
    console.log(GREEN + "[+] فحص النظام من الفيروسات..." + RESET);
    exec("clamscan -r /", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout);
    });
}

function detectIntruders() {
    console.log(GREEN + "[+] تشغيل Metasploit للكشف عن أي نشاط مشبوه..." + RESET);
    exec("msfconsole -q -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS 192.168.1.0/24; run; exit'", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(stdout);
    });
}

function installProtection() {
    console.log(GREEN + "[+] تثبيت جدار الحماية UFW وإغلاق المنافذ الخطرة..." + RESET);
    exec("sudo apt install ufw -y", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        exec("sudo ufw default deny incoming", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            exec("sudo ufw default allow outgoing", (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                exec("sudo ufw enable", (error, stdout, stderr) => {
                    if (error) {
                        console.error(`exec error: ${error}`);
                        return;
                    }
                    console.log(stdout);
                });
            });
        });
    });
}

function main() {
    showBanner();
    console.log(RED + "[1]" + YELLOW + " فحص المنافذ المفتوحة والمغلقة" + RESET);
    console.log(RED + "[2]" + YELLOW + " تحليل النظام وكشف الثغرات" + RESET);
    console.log(RED + "[3]" + YELLOW + " مسح الشبكة وتحديد IPs المشبوهة" + RESET);
    console.log(RED + "[4]" + YELLOW + " فحص النظام من الفيروسات" + RESET);
    console.log(RED + "[5]" + YELLOW + " كشف المخترقين وعكس الهجوم" + RESET);
    console.log(RED + "[6]" + YELLOW + " تثبيت برامج الحماية وإغلاق المنافذ" + RESET);
    console.log("");
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Pleas Enter your target: ", (choice) => {
        if (choice === "1") {
            checkPorts();
        } else if (choice === "2") {
            scanVulnerabilities();
        } else if (choice === "3") {
            scanNetwork();
        } else if (choice === "4") {
            scanViruses();
        } else if (choice === "5") {
            detectIntruders();
        } else if (choice === "6") {
            installProtection();
        } else {
            console.log(RED + "خيار غير صحيح!" + RESET);
        }
        rl.close();
    });
}

main();
