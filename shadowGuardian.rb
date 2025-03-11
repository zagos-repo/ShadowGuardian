#!/usr/bin/env ruby
require 'open3'

# ألوان ANSI
RED = "\033[1;31m"
YELLOW = "\033[1;33m"
GREEN = "\033[1;32m"
BLUE = "\033[1;34m"
RESET = "\033[0m"

def show_banner
  puts GREEN + "           ⠀⠀⢀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀"
  puts GREEN + "⠀⠀⠀⠀⠀  ⠀  ⣠⣾⡿⠿⠛⠛⠛⠻⠿⢷⣦⠀⠀⠀⠀⠀"
  puts GREEN + "⠀⠀⠀⠀⠀    ⣴⡿⠁⠀⠀⠀⢀⣀⠀⠀⠈⢻⣦⠀⠀⠀⠀"
  puts GREEN + "⠀⠀⠀⠀    ⣼⡟⠀⢀⣠⣴⣾⠿⠿⣷⣦⡀⠀⢻⣧⠀⠀⠀"
  puts GREEN + "⠀⠀⠀    ⢠⣿⠁⣰⡿⠋⠀⠀⠀⠀⠀⠙⢿⡆⠈⣿⡄⠀⠀"
  puts GREEN + "⠀⠀⠀    ⢸⡇⠀⣿⠁⠀⠀⢀⣀⠀⠀⠀⠈⣿⠀⢸⡇⠀⠀"
  puts GREEN + "⠀⠀⠀    ⠘⣧⠀⠻⣧⡀⠀⠻⠿⠟⠀⢀⣼⠟⠀⣼⠃⠀⠀"
  puts GREEN + "⠀⠀⠀    ⠀⠹⣷⡀⠙⠿⣷⣤⣤⣴⡿⠟⢀⣾⠏⠀⠀⠀⠀"
  puts GREEN + "⠀⠀⠀    ⠀⠀⠙⢿⣦⡀⠀⠉⠉⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀"
  puts GREEN + "⠀⠀⠀  ⠀  ⠀⠀⠀⠙⠻⢷⣶⣶⡾⠟⠋⠀⠀⠀⠀⠀⠀⠀"
  puts RESET + BLUE + "     ShadowGuardian v1.2" + RESET
  puts RESET + BLUE +  "      Zakarya Commondo"  +  RESET
  puts ""
end

def check_ports
  puts GREEN + "[+] فحص المنافذ المفتوحة والمغلقة..." + RESET
  Open3.popen3("netstat -tulnp") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
end

def scan_vulnerabilities
  puts GREEN + "[+] تحليل النظام وكشف الثغرات..." + RESET
  Open3.popen3("nmap -sV --script=vuln localhost") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
end

def scan_network
  puts GREEN + "[+] مسح الشبكة وتحديد IPs المشبوهة..." + RESET
  Open3.popen3("nmap -sn 192.168.1.0/24") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
end

def scan_viruses
  puts GREEN + "[+] فحص النظام من الفيروسات..." + RESET
  Open3.popen3("clamscan -r /") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
end

def detect_intruders
  puts GREEN + "[+] تشغيل Metasploit للكشف عن أي نشاط مشبوه..." + RESET
  Open3.popen3("msfconsole -q -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS 192.168.1.0/24; run; exit'") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
end

def install_protection
  puts GREEN + "[+] تثبيت جدار الحماية UFW وإغلاق المنافذ الخطرة..." + RESET
  Open3.popen3("sudo apt install ufw -y") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
  Open3.popen3("sudo ufw default deny incoming") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
  Open3.popen3("sudo ufw default allow outgoing") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
  Open3.popen3("sudo ufw enable") do |stdin, stdout, stderr, wait_thr|
    puts stdout.read
  end
end

def main
  show_banner
  puts RED + "[1]" + YELLOW + " فحص المنافذ المفتوحة والمغلقة" + RESET
  puts RED + "[2]" + YELLOW + " تحليل النظام وكشف الثغرات" + RESET
  puts RED + "[3]" + YELLOW + " مسح الشبكة وتحديد IPs المشبوهة" + RESET
  puts RED + "[4]" + YELLOW + " فحص النظام من الفيروسات" + RESET
  puts RED + "[5]" + YELLOW + " كشف المخترقين وعكس الهجوم" + RESET
  puts RED + "[6]" + YELLOW + " تثبيت برامج الحماية وإغلاق المنافذ" + RESET
  puts ""
  
  print "Pleas Enter your target: "
  choice = gets.chomp

  case choice
  when "1"
    check_ports
  when "2"
    scan_vulnerabilities
  when "3"
    scan_network
  when "4"
    scan_viruses
  when "5"
    detect_intruders
  when "6"
    install_protection
  else
    puts RED + "خيار غير صحيح!" + RESET
  end
end

main
