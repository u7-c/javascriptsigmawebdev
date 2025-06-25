async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}
async function main(){
    console.log("hi my name is aeryan")

    console.log("load data")

    console.log("process data")

    let data = await getData()

    console.log(  data)

    console.log("thank u")

}
main()