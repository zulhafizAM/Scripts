import BaseService from 'App/Services/BaseService';
import Section from 'App/Models/Section';

export default class SectionServices extends BaseService {
    public async getSections({ page = 1, perPage = 10 }) {
        return this.getDataList(Section, { page, perPage });
    }

    public async getSection(sectionId: number) {
        const readSection = await Section.query()
            .where('active', true)
            .where('id', sectionId)
            .preload('department', (query) => query.where('active', true))
            .preload('units', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readSection;
    }

    public async addSection(payload) {
        return this.createData(Section, payload, 'Admin');
    }

    public async editSection(id: number, payload) {
        return this.updateData(Section, id, payload, 'Admin');
    }
}
