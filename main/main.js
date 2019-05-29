module.exports = function main() {
	var res=[];
	
	if(arguments.length<1)
		console.log("need input more arguments!");
	else
	{		
		var NUM = parseInt(arguments[0]);
		var source1=['._.' ,  '...' ,  '._.' ,  '._.'  , '...'  , '._.'  , '._.'  , '._.' ,  '._.' ,  '._.'];
		var source2=['|.|' ,  '..|'  , '._|' ,  '._|' ,  '|_|'  , '|_.' ,  '|_.' ,  '..|' ,  '|_|'  , '|_|'];
		var source3=['|_|' ,  '..|'  , '|_.'  , '._|'  , '..|'  , '._|'  , '|_|' ,  '..|'  , '|_|'  , '..|'];
		
		var num=[];
		for(var i=0;i<String(NUM).length;i++)
		{
			num[i]=NUM%10;
			NUM=NUM/10;
		}
		
		for(var i=num.length-1;i>=0;i--)
		{
			res[0]+=sourse1[i];
			res[1]+=sourse2[i];
			res[2]+=sourse3[i];
			if(i>0 && i<num.length-1)
			{
				res[0]+=' ';
				res[1]+=' ';
				res[2]+=' ';
			}
		}
		res[0]+='\n';
		res[1]+='\n';
		res[2]+='\n';
		res[0]=res[0]+res[1]+res[2];
	}
	
    return res[0];
};
