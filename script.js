let count = 0;
document.getElementById("counter-btn").addEventListener("click", function ()
{
    count++;
    document.getElementById("counter").innerText = count;
});