let x = parseInt(prompt('Digite um número:'));
let y = parseInt(prompt('Digite um número:'));
let op = prompt('Escolha a operação a ser realizada: \n+ Soma\n- Subtrai\n* Multiplica\n/ Divide');

if(op == '+')
{
    z = x + y;
}
else if(op == '-')
{
    z = x - y;
}
else if(op == '*')
{
    z = x * y;
}
else if(op == '/')
{
    z = x / y;
}
alert(`O resultado é ${z}`)