#!/usr/bin/env python3
import os

# ألوان ANSI
RED = "\033[1;31m"
YELLOW = "\033[1;33m"
GREEN = "\033[1;32m"
BLUE = "\033[1;34m"
RESET = "\033[0m"

def show_banner():
    print(GREEN + "           ⠀⠀⢀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀")
    print(GREEN + "⠀⠀⠀⠀⠀  ⠀  ⣠⣾⡿⠿⠛⠛⠛⠻⠿⢷⣦⠀⠀⠀⠀⠀")
    print(GREEN + "⠀⠀⠀⠀⠀    ⣴⡿⠁⠀⠀⠀⢀⣀⠀⠀⠈⢻⣦⠀⠀⠀⠀")
    print(GREEN + "⠀⠀⠀⠀    ⣼⡟⠀⢀⣠⣴⣾⠿⠿⣷⣦⡀⠀⢻⣧⠀⠀⠀")
    print(GREEN + "⠀⠀⠀    ⢠⣿⠁⣰⡿⠋⠀⠀⠀⠀⠀⠙⢿⡆⠈⣿⡄⠀⠀")
    print(GREEN + "⠀⠀⠀    ⢸⡇⠀⣿⠁⠀⠀⢀⣀⠀⠀⠀⠈⣿⠀⢸⡇⠀⠀")
    print(GREEN + "⠀⠀⠀    ⠘⣧⠀⠻⣧⡀⠀⠻⠿⠟⠀⢀⣼⠟⠀⣼⠃⠀⠀")
    print(GREEN + "⠀⠀⠀    ⠀⠹⣷⡀⠙⠿⣷⣤⣤⣴⡿⠟⢀⣾⠏⠀⠀⠀⠀")
    print(GREEN + "⠀⠀⠀    ⠀⠀⠙⢿⣦⡀⠀⠉⠉⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀")
    print(GREEN + "⠀⠀⠀  ⠀  ⠀⠀⠀⠙⠻⢷⣶⣶⡾⠟⠋⠀⠀⠀⠀⠀⠀⠀")
    print(RESET + BLUE + "     ShadowGuardian v1.2" + RESET)
    print(RESET + BLUE +  "      Zakarya Commondo"  +  RESET)
    print("")

def check_ports():
    print(GREEN + "[+] فحص المنافذ المفتوحة والمغلقة..." + RESET)
    os.system("netstat -tulnp")

def scan_vulnerabilities():
    print(GREEN + "[+] تحليل النظام وكشف الثغرات..." + RESET)
    os.system("nmap -sV --script=vuln localhost")

def scan_network():
    print(GREEN + "[+] مسح الشبكة وتحديد IPs المشبوهة..." + RESET)
    os.system("nmap -sn 192.168.1.0/24")

def scan_viruses():
    print(GREEN + "[+] فحص النظام من الفيروسات..." + RESET)
    os.system("clamscan -r /")

def detect_intruders():
    print(GREEN + "[+] تشغيل Metasploit للكشف عن أي نشاط مشبوه..." + RESET)
    os.system("msfconsole -q -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS 192.168.1.0/24; run; exit'")

def install_protection():
    print(GREEN + "[+] تثبيت جدار الحماية UFW وإغلاق المنافذ الخطرة..." + RESET)
    os.system("sudo apt install ufw -y")
    os.system("sudo ufw default deny incoming")
    os.system("sudo ufw default allow outgoing")
    os.system("sudo ufw enable")

def main():
    show_banner()
    print(RED + "[1]" + YELLOW + " فحص المنافذ المفتوحة والمغلقة" + RESET)
    print(RED + "[2]" + YELLOW + " تحليل النظام وكشف الثغرات" + RESET)
    print(RED + "[3]" + YELLOW + " مسح الشبكة وتحديد IPs المشبوهة" + RESET)
    print(RED + "[4]" + YELLOW + " فحص النظام من الفيروسات" + RESET)
    print(RED + "[5]" + YELLOW + " كشف المخترقين وعكس الهجوم" + RESET)
    print(RED + "[6]" + YELLOW + " تثبيت برامج الحماية وإغلاق المنافذ" + RESET)
    print("")
    choice = input("Pleas Enter your target: ")

    if choice == "1":
        check_ports()
    elif choice == "2":
        scan_vulnerabilities()
    elif choice == "3":
        scan_network()
    elif choice == "4":
        scan_viruses()
    elif choice == "5":
        detect_intruders()
    elif choice == "6":
        install_protection()
    else:
        print(RED + "خيار غير صحيح!" + RESET)

if __name__ == "__main__":
    main()
