const full = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
});

const monthAndYear = new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric',
});

const dayHourMinutes = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
});

export default class TimeFormatter {
    static full(date: Date): string {
        return full.format(date);
    }

    static monthAndYear(date: Date): string {
        return monthAndYear.format(date).charAt(0).toUpperCase() + monthAndYear.format(date).slice(1);
    }

    static dayHourMinutes(date: Date): string {
        return "Le " + dayHourMinutes.format(date).replace(" ", " à ");
    }
}