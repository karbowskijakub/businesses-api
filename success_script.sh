#!/bin/bash
# Skrypt do kolorowego wyswietlania outputu/komend puszczanych w terminalu. 
# Colors 
bg_cyan='\033[1;46m'
bg_green='\033[1;42m'
clear='\033[0m'

printf "\n ${bg_cyan} restaurants-api -> Stage ${bg_green} $1 ${bg_cyan} stage started! ${clear}"