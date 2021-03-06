// expression-evaluation.cpp: 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <iostream>
using namespace std;

struct
{
	char ch;
	int pri;
} lpri[] = { { '=', 0 },{ '(', 1 },{ '*', 5 },{ '/',5 },{ '+', 3 },{ '-', 3 },{ ')', 6 } },
rpri[] = { { '=', 0 },{ '(', 6 },{ '*', 4 },{ '/', 4 },{ '+', 2 },{ '-', 2 },{ ')', 1 } };
const int MaxSize = 50;
int GetLeftPri(char op)
{
	int i;
	//所有运算符的数量
	int MaxOp = 7;
	for (i = 0; i < MaxOp; i++)
	{
		if (lpri[i].ch == op) return lpri[i].pri;
	}
}
int GetRightPri(char op)
{
	int MaxOp = 7;
	for (int i = 0; i < MaxOp; i++)
	{
		if (rpri[i].ch == op) return rpri[i].pri;
	}
}
bool IsOption(char ch) {
	// 耦合
	if (ch == '(' || ch == ')' || ch == '+' || ch == '-' || ch == '*' || ch == '/') {
		return true;
	}
	else {
		return false;
	}
}
int Precede(char op1, char op2) {
	int pri1 = GetLeftPri(op1);
	int pri2 = GetRightPri(op2);
	if (pri1 == pri2) {
		return 0;
	}
	else if (pri1 > pri2) {
		return 1;
	}
	else {
		return -1;
	}
}
void trans(char *exp, char postexp[]) {
	struct
	{
		char data[MaxSize];
		int top;
	} op;
	int i = 0;
	op.top = -1;
	op.top++;
	op.data[op.top] = '=';
	while (*exp != '\0') {
		if (!IsOption(*exp)) {
			while (*exp >= '0' && *exp <= '9') {
				postexp[i++] = *exp;
				exp++;
			}
			postexp[i++] = '#';
		}
		else {
			switch (Precede(op.data[op.top], *exp)) {
			case -1:
				op.top++;
				op.data[op.top] = *exp;
				exp++;
				break;
			case 0:
				op.top--;
				exp++;
				break;
			case 1:
				postexp[i++] = op.data[op.top];
				op.top--;
				break;
			}
		}
	}
	while (op.data[op.top] != '=') {
		postexp[i++] = op.data[op.top];
		op.top--;
	}
	postexp[i] = '\0';
}
int main()
{
	char exp[] = "(56-20)/(4+2)";
	char postexp[MaxSize];
	trans(exp, postexp);
	cout << postexp << endl;
	system("pause");
	return 0;
}

