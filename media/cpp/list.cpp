#include <bits/stdc++.h>
#include <cstdlib>
#include <iostream>

//namespace fs = std::filesystem;
using namespace std;

int main() {
string path(
        "\"C:\\Users\\fedo munganga\\code\\js\\react apps\\worldFlags\\media\\worldFlags\"");

        string command("dir /a-d ");
        
         command.append(path);
         const char* final_command = command.c_str();
        
        system(final_command);


    return 0;
}