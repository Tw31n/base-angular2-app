document.onreadystatechange = () => {
    let nodeList: NodeListOf<Element> = document.getElementsByTagName('body');
    let bodyNode: Element = nodeList.item(0);

    bodyNode.innerHTML = 'Angular 2 app';
}
