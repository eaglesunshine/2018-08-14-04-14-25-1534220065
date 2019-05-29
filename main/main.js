module.exports = function main() {
	var res1=[],res2=[],res3=[],res=[];
	
	if(arguments.length<1)
		console.log("need input more arguments!");
	else
	{		
		var NUM = parseInt(arguments[0]);
		var source1=['._.' ,  '...' ,  '._.' ,  '._.'  , '...'  , '._.'  , '._.'  , '._.' ,  '._.' ,  '._.'];
		var source2=['|.|' ,  '..|'  , '._|' ,  '._|' ,  '|_|'  , '|_.' ,  '|_.' ,  '..|' ,  '|_|'  , '|_|'];
		var source3=['|_|' ,  '..|'  , '|_.'  , '._|'  , '..|'  , '._|'  , '|_|' ,  '..|'  , '|_|'  , '..|'];
		
		var num=[],j=0;
		while(NUM!=0){
			num[j]=NUM%10;
			NUM=Math.floor(NUM/10);
			j++;
		} 
		
		for(var i=num.length-1;i>=0;i--)
		{
			res1+=source1[num[i]];
			res2+=source2[num[i]];
			res3+=source3[num[i]];
			if(i>0)
			{
				res1+=' ';
				res2+=' ';
				res3+=' ';
			}
		}
		
		res1+='\n';
		res2+='\n';
		res3+='\n';
		res=res1+res2+res3;
	}
	
    return res;
};
