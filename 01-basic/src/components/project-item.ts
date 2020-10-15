import { Component } from './base-component'
import { Draggable } from '../models/drag-drop'
import { autobind } from '../decorators/autobind'
import { Project } from '../models/project'

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  get persons() {
    if (this.project.people === 1) {
      return '1 person'
    } else {
      return `${this.project.people} people`
    }
  }

  constructor(protected hostId: string, protected project: Project) {
    super(
      'single-project',
      hostId,
      false,
      project.id
    )

    this.configure()
    this.renderContent()
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id)
    event.dataTransfer!.effectAllowed = 'move'
  }

  dragEndHandler(_: DragEvent) {
    console.log('DragEnd')
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title
    this.element.querySelector('h3')!.textContent = `${this.persons} assigned`
    this.element.querySelector('p')!.textContent = this.project.description
  }
}
