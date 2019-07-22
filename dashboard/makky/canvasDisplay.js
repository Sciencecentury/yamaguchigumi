function Chartdisplay(num,year)
{
	
	year="Chart"+year;
	
  if (num == 0)
  {
    document.getElementById(year).style.display="block";
  }
  else
  {
    document.getElementById(year).style.display="none";
  }
}